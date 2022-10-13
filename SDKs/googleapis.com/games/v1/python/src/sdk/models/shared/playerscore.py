from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlayerScoreTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class PlayerScore:
    formatted_score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedScore' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    score: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    score_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreTag' }})
    time_span: Optional[PlayerScoreTimeSpanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSpan' }})
    
