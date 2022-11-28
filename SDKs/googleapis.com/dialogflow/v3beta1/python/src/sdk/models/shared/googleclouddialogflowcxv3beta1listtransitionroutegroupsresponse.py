from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse
    The response message for TransitionRouteGroups.ListTransitionRouteGroups.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transition_route_groups: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRouteGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRouteGroups') }})
    
