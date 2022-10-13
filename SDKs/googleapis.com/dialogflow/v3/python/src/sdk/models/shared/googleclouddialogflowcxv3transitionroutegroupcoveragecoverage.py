from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3transitionroutegroup
from . import googleclouddialogflowcxv3transitionroutegroupcoveragecoveragetransition


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage:
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverageScore' }})
    route_group: Optional[googleclouddialogflowcxv3transitionroutegroup.GoogleCloudDialogflowCxV3TransitionRouteGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeGroup' }})
    transitions: Optional[List[googleclouddialogflowcxv3transitionroutegroupcoveragecoveragetransition.GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitions' }})
    
