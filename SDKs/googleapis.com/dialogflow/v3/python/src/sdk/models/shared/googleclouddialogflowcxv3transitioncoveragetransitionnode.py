from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode:
    r"""GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode
    The source or target of a transition.
    """
    
    flow: Optional[GoogleCloudDialogflowCxV3Flow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow') }})
    page: Optional[GoogleCloudDialogflowCxV3Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
