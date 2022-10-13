from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import playerscore

class PlayerScoreResponseBeatenScoreTimeSpansEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class PlayerScoreResponse:
    beaten_score_time_spans: Optional[List[PlayerScoreResponseBeatenScoreTimeSpansEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beatenScoreTimeSpans' }})
    formatted_score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedScore' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    leaderboard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaderboardId' }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreTag' }})
    unbeaten_scores: Optional[List[playerscore.PlayerScore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unbeatenScores' }})
    
