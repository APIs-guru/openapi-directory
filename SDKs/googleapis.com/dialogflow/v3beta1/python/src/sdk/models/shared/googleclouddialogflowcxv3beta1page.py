from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1fulfillment
from . import googleclouddialogflowcxv3beta1eventhandler
from . import googleclouddialogflowcxv3beta1form
from . import googleclouddialogflowcxv3beta1transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Page:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entry_fulfillment: Optional[googleclouddialogflowcxv3beta1fulfillment.GoogleCloudDialogflowCxV3beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryFulfillment' }})
    event_handlers: Optional[List[googleclouddialogflowcxv3beta1eventhandler.GoogleCloudDialogflowCxV3beta1EventHandler]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventHandlers' }})
    form: Optional[googleclouddialogflowcxv3beta1form.GoogleCloudDialogflowCxV3beta1Form] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    transition_route_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRouteGroups' }})
    transition_routes: Optional[List[googleclouddialogflowcxv3beta1transitionroute.GoogleCloudDialogflowCxV3beta1TransitionRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoutes' }})
    
