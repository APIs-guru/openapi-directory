from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage:
    r"""GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage
    Coverage result message for one transition route group.
    """
    
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverageScore') }})
    route_group: Optional[GoogleCloudDialogflowCxV3beta1TransitionRouteGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeGroup') }})
    transitions: Optional[List[GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitions') }})
    
