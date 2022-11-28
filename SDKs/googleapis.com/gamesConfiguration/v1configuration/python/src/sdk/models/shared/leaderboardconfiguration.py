from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LeaderboardConfigurationScoreOrderEnum(str, Enum):
    SCORE_ORDER_UNSPECIFIED = "SCORE_ORDER_UNSPECIFIED"
    LARGER_IS_BETTER = "LARGER_IS_BETTER"
    SMALLER_IS_BETTER = "SMALLER_IS_BETTER"


@dataclass_json
@dataclass
class LeaderboardConfiguration:
    r"""LeaderboardConfiguration
    An leaderboard configuration resource.
    """
    
    draft: Optional[LeaderboardConfigurationDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    published: Optional[LeaderboardConfigurationDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    score_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreMax') }})
    score_min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreMin') }})
    score_order: Optional[LeaderboardConfigurationScoreOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreOrder') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
