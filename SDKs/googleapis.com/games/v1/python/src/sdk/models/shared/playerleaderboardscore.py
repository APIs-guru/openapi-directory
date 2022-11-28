from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlayerLeaderboardScoreTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class PlayerLeaderboardScore:
    r"""PlayerLeaderboardScore
    A player leaderboard score object.
    """
    
    friends_rank: Optional[LeaderboardScoreRank] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendsRank') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    leaderboard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderboard_id') }})
    public_rank: Optional[LeaderboardScoreRank] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicRank') }})
    score_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreString') }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreTag') }})
    score_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreValue') }})
    social_rank: Optional[LeaderboardScoreRank] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialRank') }})
    time_span: Optional[PlayerLeaderboardScoreTimeSpanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSpan') }})
    write_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeTimestamp') }})
    
