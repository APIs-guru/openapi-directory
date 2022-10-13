from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import player

class LeaderboardEntryTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class LeaderboardEntry:
    formatted_score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedScore' }})
    formatted_score_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedScoreRank' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    player: Optional[player.Player] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    score_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreRank' }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreTag' }})
    score_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreValue' }})
    time_span: Optional[LeaderboardEntryTimeSpanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSpan' }})
    write_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeTimestampMillis' }})
    
