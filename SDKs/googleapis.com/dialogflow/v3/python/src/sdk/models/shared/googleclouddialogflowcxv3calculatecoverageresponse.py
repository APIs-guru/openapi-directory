from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3intentcoverage
from . import googleclouddialogflowcxv3transitionroutegroupcoverage
from . import googleclouddialogflowcxv3transitioncoverage


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3CalculateCoverageResponse:
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent' }})
    intent_coverage: Optional[googleclouddialogflowcxv3intentcoverage.GoogleCloudDialogflowCxV3IntentCoverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentCoverage' }})
    route_group_coverage: Optional[googleclouddialogflowcxv3transitionroutegroupcoverage.GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeGroupCoverage' }})
    transition_coverage: Optional[googleclouddialogflowcxv3transitioncoverage.GoogleCloudDialogflowCxV3TransitionCoverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionCoverage' }})
    
