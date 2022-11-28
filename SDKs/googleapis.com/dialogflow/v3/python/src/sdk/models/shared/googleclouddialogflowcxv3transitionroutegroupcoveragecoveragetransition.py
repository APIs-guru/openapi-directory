from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition:
    r"""GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition
    A transition coverage in a transition route group.
    """
    
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('covered') }})
    transition_route: Optional[GoogleCloudDialogflowCxV3TransitionRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoute') }})
    
