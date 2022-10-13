from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1transitionroutegroup


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    transition_route_groups: Optional[List[googleclouddialogflowcxv3beta1transitionroutegroup.GoogleCloudDialogflowCxV3beta1TransitionRouteGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRouteGroups' }})
    
