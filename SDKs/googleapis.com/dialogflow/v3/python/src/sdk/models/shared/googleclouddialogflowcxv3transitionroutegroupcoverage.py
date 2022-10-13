from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3transitionroutegroupcoveragecoverage


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage:
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverageScore' }})
    coverages: Optional[List[googleclouddialogflowcxv3transitionroutegroupcoveragecoverage.GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverages' }})
    
