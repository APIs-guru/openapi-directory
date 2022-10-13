from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ScoreTypeEnum(str, Enum):
    SCORE_TYPE_UNSPECIFIED = "SCORE_TYPE_UNSPECIFIED"
    PROBABILITY = "PROBABILITY"
    STD_DEV_SCORE = "STD_DEV_SCORE"
    PERCENTILE = "PERCENTILE"
    RAW = "RAW"


@dataclass_json
@dataclass
class Score:
    type: Optional[ScoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
