from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRoute:
    r"""GoogleCloudDialogflowCxV3beta1TransitionRoute
    A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
    """
    
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetFlow') }})
    target_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPage') }})
    trigger_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerFulfillment') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteInput:
    r"""GoogleCloudDialogflowCxV3beta1TransitionRouteInput
    A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
    """
    
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    target_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetFlow') }})
    target_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPage') }})
    trigger_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1FulfillmentInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerFulfillment') }})
    
