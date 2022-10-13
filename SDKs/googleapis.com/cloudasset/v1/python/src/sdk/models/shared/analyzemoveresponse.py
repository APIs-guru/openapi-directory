from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import moveanalysis


@dataclass_json
@dataclass
class AnalyzeMoveResponse:
    move_analysis: Optional[List[moveanalysis.MoveAnalysis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moveAnalysis' }})
    
