from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlayerScoreResponseBeatenScoreTimeSpansEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class PlayerScoreResponse:
    r"""PlayerScoreResponse
    A list of leaderboard entry resources.
    """
    
    beaten_score_time_spans: Optional[List[PlayerScoreResponseBeatenScoreTimeSpansEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beatenScoreTimeSpans') }})
    formatted_score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedScore') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    leaderboard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderboardId') }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreTag') }})
    unbeaten_scores: Optional[List[PlayerScore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unbeatenScores') }})
    
