from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2detectionrule
from . import googleprivacydlpv2dictionary
from . import googleprivacydlpv2infotype
from . import googleprivacydlpv2regex
from . import googleprivacydlpv2storedtype

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
    detection_rules: Optional[List[googleprivacydlpv2detectionrule.GooglePrivacyDlpV2DetectionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectionRules' }})
    dictionary: Optional[googleprivacydlpv2dictionary.GooglePrivacyDlpV2Dictionary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dictionary' }})
    exclusion_type: Optional[GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusionType' }})
    info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoType' }})
    likelihood: Optional[GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likelihood' }})
    regex: Optional[googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    stored_type: Optional[googleprivacydlpv2storedtype.GooglePrivacyDlpV2StoredType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storedType' }})
    surrogate_type: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surrogateType' }})
    
