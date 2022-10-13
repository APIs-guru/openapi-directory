from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import moveimpact
from . import moveimpact


@dataclass_json
@dataclass
class MoveAnalysisResult:
    blockers: Optional[List[moveimpact.MoveImpact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockers' }})
    warnings: Optional[List[moveimpact.MoveImpact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
