from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeMoveResponse:
    r"""AnalyzeMoveResponse
    The response message for resource move analysis.
    """
    
    move_analysis: Optional[List[MoveAnalysis]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moveAnalysis') }})
    
