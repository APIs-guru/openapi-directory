from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import achievementupdateresponse


@dataclass_json
@dataclass
class AchievementUpdateMultipleResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    updated_achievements: Optional[List[achievementupdateresponse.AchievementUpdateResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAchievements' }})
    
