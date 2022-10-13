from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import achievementresetresponse


@dataclass_json
@dataclass
class AchievementResetAllResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    results: Optional[List[achievementresetresponse.AchievementResetResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
