from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition:
    r"""GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition
    A transition coverage in a transition route group.
    """
    
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('covered') }})
    transition_route: Optional[GoogleCloudDialogflowCxV3beta1TransitionRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoute') }})
    
