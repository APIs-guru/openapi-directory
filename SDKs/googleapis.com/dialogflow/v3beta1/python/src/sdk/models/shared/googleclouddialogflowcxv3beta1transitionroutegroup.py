from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput:
    r"""GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput
    An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    transition_routes: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRouteInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoutes') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteGroup:
    r"""GoogleCloudDialogflowCxV3beta1TransitionRouteGroup
    An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    transition_routes: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoutes') }})
    
