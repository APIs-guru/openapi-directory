from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GooglePrivacyDlpV2SensitivityScoreScoreEnum(str, Enum):
    SENSITIVITY_SCORE_UNSPECIFIED = "SENSITIVITY_SCORE_UNSPECIFIED"
    SENSITIVITY_LOW = "SENSITIVITY_LOW"
    SENSITIVITY_MODERATE = "SENSITIVITY_MODERATE"
    SENSITIVITY_HIGH = "SENSITIVITY_HIGH"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2SensitivityScore:
    r"""GooglePrivacyDlpV2SensitivityScore
    Score is a summary of all elements in the data profile. A higher number means more sensitive.
    """
    
    score: Optional[GooglePrivacyDlpV2SensitivityScoreScoreEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
