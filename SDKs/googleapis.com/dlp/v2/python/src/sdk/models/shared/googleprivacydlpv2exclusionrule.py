from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2dictionary
from . import googleprivacydlpv2excludeinfotypes
from . import googleprivacydlpv2regex

class GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum(str, Enum):
    MATCHING_TYPE_UNSPECIFIED = "MATCHING_TYPE_UNSPECIFIED"
    MATCHING_TYPE_FULL_MATCH = "MATCHING_TYPE_FULL_MATCH"
    MATCHING_TYPE_PARTIAL_MATCH = "MATCHING_TYPE_PARTIAL_MATCH"
    MATCHING_TYPE_INVERSE_MATCH = "MATCHING_TYPE_INVERSE_MATCH"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ExclusionRule:
    dictionary: Optional[googleprivacydlpv2dictionary.GooglePrivacyDlpV2Dictionary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dictionary' }})
    exclude_info_types: Optional[googleprivacydlpv2excludeinfotypes.GooglePrivacyDlpV2ExcludeInfoTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeInfoTypes' }})
    matching_type: Optional[GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingType' }})
    regex: Optional[googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    
