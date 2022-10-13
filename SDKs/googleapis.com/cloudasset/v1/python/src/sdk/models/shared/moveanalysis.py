from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import moveanalysisresult
from . import status


@dataclass_json
@dataclass
class MoveAnalysis:
    analysis: Optional[moveanalysisresult.MoveAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysis' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    
