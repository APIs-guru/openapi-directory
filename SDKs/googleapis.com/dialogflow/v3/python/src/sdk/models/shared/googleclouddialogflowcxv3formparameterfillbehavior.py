from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3fulfillment
from . import googleclouddialogflowcxv3eventhandler


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FormParameterFillBehavior:
    initial_prompt_fulfillment: Optional[googleclouddialogflowcxv3fulfillment.GoogleCloudDialogflowCxV3Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialPromptFulfillment' }})
    reprompt_event_handlers: Optional[List[googleclouddialogflowcxv3eventhandler.GoogleCloudDialogflowCxV3EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repromptEventHandlers' }})
    
