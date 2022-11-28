from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput:
    r"""GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput
    Configuration for how the filling of a parameter should be handled.
    """
    
    initial_prompt_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1FulfillmentInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialPromptFulfillment') }})
    reprompt_event_handlers: Optional[List[GoogleCloudDialogflowCxV3beta1EventHandlerInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repromptEventHandlers') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior:
    r"""GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior
    Configuration for how the filling of a parameter should be handled.
    """
    
    initial_prompt_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialPromptFulfillment') }})
    reprompt_event_handlers: Optional[List[GoogleCloudDialogflowCxV3beta1EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repromptEventHandlers') }})
    
