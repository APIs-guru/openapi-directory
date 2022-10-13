from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1fulfillment
from . import googleclouddialogflowcxv3beta1eventhandler


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior:
    initial_prompt_fulfillment: Optional[googleclouddialogflowcxv3beta1fulfillment.GoogleCloudDialogflowCxV3beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialPromptFulfillment' }})
    reprompt_event_handlers: Optional[List[googleclouddialogflowcxv3beta1eventhandler.GoogleCloudDialogflowCxV3beta1EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repromptEventHandlers' }})
    
