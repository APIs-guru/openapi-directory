from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZoneBoundary:
    r"""ZoneBoundary
    Represents a Zone's boundaries.
    """
    
    condition: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    custom_evaluation_trigger_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customEvaluationTriggerId') }})
    
