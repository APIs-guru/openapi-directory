from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3transitioncoveragetransition


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionCoverage:
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverageScore' }})
    transitions: Optional[List[googleclouddialogflowcxv3transitioncoveragetransition.GoogleCloudDialogflowCxV3TransitionCoverageTransition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitions' }})
    
