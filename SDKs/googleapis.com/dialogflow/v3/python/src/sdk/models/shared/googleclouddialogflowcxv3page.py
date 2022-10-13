from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3fulfillment
from . import googleclouddialogflowcxv3eventhandler
from . import googleclouddialogflowcxv3form
from . import googleclouddialogflowcxv3transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Page:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entry_fulfillment: Optional[googleclouddialogflowcxv3fulfillment.GoogleCloudDialogflowCxV3Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryFulfillment' }})
    event_handlers: Optional[List[googleclouddialogflowcxv3eventhandler.GoogleCloudDialogflowCxV3EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventHandlers' }})
    form: Optional[googleclouddialogflowcxv3form.GoogleCloudDialogflowCxV3Form] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    transition_route_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRouteGroups' }})
    transition_routes: Optional[List[googleclouddialogflowcxv3transitionroute.GoogleCloudDialogflowCxV3TransitionRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoutes' }})
    
