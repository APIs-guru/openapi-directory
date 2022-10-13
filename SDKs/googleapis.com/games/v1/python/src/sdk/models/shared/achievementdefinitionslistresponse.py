from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import achievementdefinition


@dataclass_json
@dataclass
class AchievementDefinitionsListResponse:
    items: Optional[List[achievementdefinition.AchievementDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
