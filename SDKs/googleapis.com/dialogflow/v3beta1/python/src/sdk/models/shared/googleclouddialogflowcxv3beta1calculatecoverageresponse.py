from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1intentcoverage
from . import googleclouddialogflowcxv3beta1transitionroutegroupcoverage
from . import googleclouddialogflowcxv3beta1transitioncoverage


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse:
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent' }})
    intent_coverage: Optional[googleclouddialogflowcxv3beta1intentcoverage.GoogleCloudDialogflowCxV3beta1IntentCoverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentCoverage' }})
    route_group_coverage: Optional[googleclouddialogflowcxv3beta1transitionroutegroupcoverage.GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeGroupCoverage' }})
    transition_coverage: Optional[googleclouddialogflowcxv3beta1transitioncoverage.GoogleCloudDialogflowCxV3beta1TransitionCoverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionCoverage' }})
    
