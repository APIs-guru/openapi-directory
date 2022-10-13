from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    fixed_likelihood: Optional[GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedLikelihood' }})
    relative_likelihood: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeLikelihood' }})
    
