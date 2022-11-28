from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage:
    r"""GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage
    Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
    """
    
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverageScore') }})
    coverages: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverages') }})
    
