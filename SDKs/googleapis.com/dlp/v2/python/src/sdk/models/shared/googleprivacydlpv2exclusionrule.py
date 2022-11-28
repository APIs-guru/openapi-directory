from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum(str, Enum):
    MATCHING_TYPE_UNSPECIFIED = "MATCHING_TYPE_UNSPECIFIED"
    MATCHING_TYPE_FULL_MATCH = "MATCHING_TYPE_FULL_MATCH"
    MATCHING_TYPE_PARTIAL_MATCH = "MATCHING_TYPE_PARTIAL_MATCH"
    MATCHING_TYPE_INVERSE_MATCH = "MATCHING_TYPE_INVERSE_MATCH"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ExclusionRule:
    r"""GooglePrivacyDlpV2ExclusionRule
    The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
    """
    
    dictionary: Optional[GooglePrivacyDlpV2Dictionary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dictionary') }})
    exclude_by_hotword: Optional[GooglePrivacyDlpV2ExcludeByHotword] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeByHotword') }})
    exclude_info_types: Optional[GooglePrivacyDlpV2ExcludeInfoTypes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeInfoTypes') }})
    matching_type: Optional[GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingType') }})
    regex: Optional[GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
