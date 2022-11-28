from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionCoverageTransition:
    r"""GoogleCloudDialogflowCxV3TransitionCoverageTransition
    A transition in a page.
    """
    
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('covered') }})
    event_handler: Optional[GoogleCloudDialogflowCxV3EventHandler] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventHandler') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    source: Optional[GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: Optional[GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    transition_route: Optional[GoogleCloudDialogflowCxV3TransitionRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionRoute') }})
    
