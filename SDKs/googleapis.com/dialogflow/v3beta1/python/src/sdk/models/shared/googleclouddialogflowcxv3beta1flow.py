from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FlowInput:
    r"""GoogleCloudDialogflowCxV3beta1FlowInput
    Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be \"consumed\". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    event_handlers: Optional[List[GoogleCloudDialogflowCxV3beta1EventHandlerInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventHandlers') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nlu_settings: Optional[GoogleCloudDialogflowCxV3beta1NluSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluSettings') }})
    transition_route_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRouteGroups') }})
    transition_routes: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRouteInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoutes') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Flow:
    r"""GoogleCloudDialogflowCxV3beta1Flow
    Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be \"consumed\". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    event_handlers: Optional[List[GoogleCloudDialogflowCxV3beta1EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventHandlers') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nlu_settings: Optional[GoogleCloudDialogflowCxV3beta1NluSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluSettings') }})
    transition_route_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRouteGroups') }})
    transition_routes: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoutes') }})
    
