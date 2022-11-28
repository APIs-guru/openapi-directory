from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1EventHandler:
    r"""GoogleCloudDialogflowCxV3beta1EventHandler
    An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
    """
    
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetFlow') }})
    target_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPage') }})
    trigger_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerFulfillment') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1EventHandlerInput:
    r"""GoogleCloudDialogflowCxV3beta1EventHandlerInput
    An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
    """
    
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    target_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetFlow') }})
    target_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPage') }})
    trigger_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1FulfillmentInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerFulfillment') }})
    
