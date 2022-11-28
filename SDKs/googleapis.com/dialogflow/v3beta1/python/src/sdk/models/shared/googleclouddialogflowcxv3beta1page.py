from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1PageInput:
    r"""GoogleCloudDialogflowCxV3beta1PageInput
    A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entry_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1FulfillmentInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryFulfillment') }})
    event_handlers: Optional[List[GoogleCloudDialogflowCxV3beta1EventHandlerInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventHandlers') }})
    form: Optional[GoogleCloudDialogflowCxV3beta1FormInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    transition_route_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRouteGroups') }})
    transition_routes: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRouteInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoutes') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Page:
    r"""GoogleCloudDialogflowCxV3beta1Page
    A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entry_fulfillment: Optional[GoogleCloudDialogflowCxV3beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryFulfillment') }})
    event_handlers: Optional[List[GoogleCloudDialogflowCxV3beta1EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventHandlers') }})
    form: Optional[GoogleCloudDialogflowCxV3beta1Form] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    transition_route_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRouteGroups') }})
    transition_routes: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoutes') }})
    
