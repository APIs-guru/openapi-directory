from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage:
    r"""GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage
    Coverage result message for one transition route group.
    """
    
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverageScore') }})
    route_group: Optional[GoogleCloudDialogflowCxV3TransitionRouteGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeGroup') }})
    transitions: Optional[List[GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitions') }})
    
