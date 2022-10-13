from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionRouteGroup:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    transition_routes: Optional[List[googleclouddialogflowcxv3transitionroute.GoogleCloudDialogflowCxV3TransitionRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoutes' }})
    
