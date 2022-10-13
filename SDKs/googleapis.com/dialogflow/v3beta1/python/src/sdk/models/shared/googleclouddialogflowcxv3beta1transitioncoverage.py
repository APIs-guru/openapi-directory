from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1transitioncoveragetransition


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionCoverage:
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverageScore' }})
    transitions: Optional[List[googleclouddialogflowcxv3beta1transitioncoveragetransition.GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitions' }})
    
