from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MoveAnalysisResult:
    r"""MoveAnalysisResult
    An analysis result including blockers and warnings.
    """
    
    blockers: Optional[List[MoveImpact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockers') }})
    warnings: Optional[List[MoveImpact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
