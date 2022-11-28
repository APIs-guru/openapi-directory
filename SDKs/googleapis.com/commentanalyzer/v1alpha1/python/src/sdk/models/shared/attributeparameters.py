from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AttributeParametersScoreTypeEnum(str, Enum):
    SCORE_TYPE_UNSPECIFIED = "SCORE_TYPE_UNSPECIFIED"
    PROBABILITY = "PROBABILITY"
    STD_DEV_SCORE = "STD_DEV_SCORE"
    PERCENTILE = "PERCENTILE"
    RAW = "RAW"


@dataclass_json
@dataclass
class AttributeParameters:
    r"""AttributeParameters
    Configurable parameters for attribute scoring.
    """
    
    score_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreThreshold') }})
    score_type: Optional[AttributeParametersScoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreType') }})
    
