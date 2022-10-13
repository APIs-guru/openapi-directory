from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition:
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'covered' }})
    transition_route: Optional[googleclouddialogflowcxv3beta1transitionroute.GoogleCloudDialogflowCxV3beta1TransitionRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoute' }})
    
