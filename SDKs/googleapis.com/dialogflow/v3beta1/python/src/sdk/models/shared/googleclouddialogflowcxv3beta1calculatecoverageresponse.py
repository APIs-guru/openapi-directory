from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse:
    r"""GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse
    The response message for TestCases.CalculateCoverage.
    """
    
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    intent_coverage: Optional[GoogleCloudDialogflowCxV3beta1IntentCoverage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentCoverage') }})
    route_group_coverage: Optional[GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeGroupCoverage') }})
    transition_coverage: Optional[GoogleCloudDialogflowCxV3beta1TransitionCoverage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionCoverage') }})
    
