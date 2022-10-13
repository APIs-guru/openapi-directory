from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playerscoreresetresponse


@dataclass_json
@dataclass
class PlayerScoreResetAllResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    results: Optional[List[playerscoreresetresponse.PlayerScoreResetResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
