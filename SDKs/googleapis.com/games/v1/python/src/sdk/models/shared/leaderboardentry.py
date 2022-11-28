from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LeaderboardEntryTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class LeaderboardEntry:
    r"""LeaderboardEntry
    The Leaderboard Entry resource.
    """
    
    formatted_score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedScore') }})
    formatted_score_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedScoreRank') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    player: Optional[Player] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    score_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreRank') }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreTag') }})
    score_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreValue') }})
    time_span: Optional[LeaderboardEntryTimeSpanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSpan') }})
    write_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeTimestampMillis') }})
    
