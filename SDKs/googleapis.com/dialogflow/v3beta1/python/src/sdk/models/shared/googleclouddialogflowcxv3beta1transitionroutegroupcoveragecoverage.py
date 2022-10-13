from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1transitionroutegroup
from . import googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoveragetransition


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage:
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverageScore' }})
    route_group: Optional[googleclouddialogflowcxv3beta1transitionroutegroup.GoogleCloudDialogflowCxV3beta1TransitionRouteGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeGroup' }})
    transitions: Optional[List[googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoveragetransition.GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitions' }})
    
