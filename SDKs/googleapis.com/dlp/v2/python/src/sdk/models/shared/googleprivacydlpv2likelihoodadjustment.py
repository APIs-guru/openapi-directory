from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum(str, Enum):
    LIKELIHOOD_UNSPECIFIED = "LIKELIHOOD_UNSPECIFIED"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LikelihoodAdjustment:
    r"""GooglePrivacyDlpV2LikelihoodAdjustment
    Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
    """
    
    fixed_likelihood: Optional[GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedLikelihood') }})
    relative_likelihood: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeLikelihood') }})
    
