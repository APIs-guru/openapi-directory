from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playerscoreresponse


@dataclass_json
@dataclass
class PlayerScoreListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    submitted_scores: Optional[List[playerscoreresponse.PlayerScoreResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedScores' }})
    
