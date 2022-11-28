from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum(str, Enum):
    EXCLUSION_TYPE_UNSPECIFIED = "EXCLUSION_TYPE_UNSPECIFIED"
    EXCLUSION_TYPE_EXCLUDE = "EXCLUSION_TYPE_EXCLUDE"

class GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum(str, Enum):
    LIKELIHOOD_UNSPECIFIED = "LIKELIHOOD_UNSPECIFIED"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CustomInfoType:
    r"""GooglePrivacyDlpV2CustomInfoType
    Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
    """
    
    detection_rules: Optional[List[GooglePrivacyDlpV2DetectionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectionRules') }})
    dictionary: Optional[GooglePrivacyDlpV2Dictionary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dictionary') }})
    exclusion_type: Optional[GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionType') }})
    info_type: Optional[GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    likelihood: Optional[GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likelihood') }})
    regex: Optional[GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    stored_type: Optional[GooglePrivacyDlpV2StoredType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storedType') }})
    surrogate_type: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surrogateType') }})
    
