from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode:
    r"""GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode
    The source or target of a transition.
    """
    
    flow: Optional[GoogleCloudDialogflowCxV3beta1Flow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow') }})
    page: Optional[GoogleCloudDialogflowCxV3beta1Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
