from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionCoverage:
    r"""GoogleCloudDialogflowCxV3TransitionCoverage
    Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
    """
    
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverageScore') }})
    transitions: Optional[List[GoogleCloudDialogflowCxV3TransitionCoverageTransition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitions') }})
    
