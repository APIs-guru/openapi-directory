from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import leaderboardscorerank
from . import leaderboardscorerank
from . import leaderboardscorerank

class PlayerLeaderboardScoreTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class PlayerLeaderboardScore:
    friends_rank: Optional[leaderboardscorerank.LeaderboardScoreRank] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendsRank' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    leaderboard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaderboard_id' }})
    public_rank: Optional[leaderboardscorerank.LeaderboardScoreRank] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicRank' }})
    score_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreString' }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreTag' }})
    score_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreValue' }})
    social_rank: Optional[leaderboardscorerank.LeaderboardScoreRank] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socialRank' }})
    time_span: Optional[PlayerLeaderboardScoreTimeSpanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSpan' }})
    write_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeTimestamp' }})
    
