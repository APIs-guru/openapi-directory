from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import leaderboardconfigurationdetail
from . import leaderboardconfigurationdetail

class LeaderboardConfigurationScoreOrderEnum(str, Enum):
    SCORE_ORDER_UNSPECIFIED = "SCORE_ORDER_UNSPECIFIED"
    LARGER_IS_BETTER = "LARGER_IS_BETTER"
    SMALLER_IS_BETTER = "SMALLER_IS_BETTER"


@dataclass_json
@dataclass
class LeaderboardConfiguration:
    draft: Optional[leaderboardconfigurationdetail.LeaderboardConfigurationDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    published: Optional[leaderboardconfigurationdetail.LeaderboardConfigurationDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    score_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreMax' }})
    score_min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreMin' }})
    score_order: Optional[LeaderboardConfigurationScoreOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreOrder' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
