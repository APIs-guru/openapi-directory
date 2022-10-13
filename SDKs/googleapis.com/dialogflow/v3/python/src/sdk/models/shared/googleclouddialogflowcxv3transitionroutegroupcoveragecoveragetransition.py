from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition:
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'covered' }})
    transition_route: Optional[googleclouddialogflowcxv3transitionroute.GoogleCloudDialogflowCxV3TransitionRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoute' }})
    
