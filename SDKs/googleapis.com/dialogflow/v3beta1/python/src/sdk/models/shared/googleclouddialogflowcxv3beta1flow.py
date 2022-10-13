from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1eventhandler
from . import googleclouddialogflowcxv3beta1nlusettings
from . import googleclouddialogflowcxv3beta1transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Flow:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    event_handlers: Optional[List[googleclouddialogflowcxv3beta1eventhandler.GoogleCloudDialogflowCxV3beta1EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventHandlers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nlu_settings: Optional[googleclouddialogflowcxv3beta1nlusettings.GoogleCloudDialogflowCxV3beta1NluSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluSettings' }})
    transition_route_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRouteGroups' }})
    transition_routes: Optional[List[googleclouddialogflowcxv3beta1transitionroute.GoogleCloudDialogflowCxV3beta1TransitionRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoutes' }})
    
