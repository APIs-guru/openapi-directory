from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MoveAnalysis:
    r"""MoveAnalysis
    A message to group the analysis information.
    """
    
    analysis: Optional[MoveAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysis') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
