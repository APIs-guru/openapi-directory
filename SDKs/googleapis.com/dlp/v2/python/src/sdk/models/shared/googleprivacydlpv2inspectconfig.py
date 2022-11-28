from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2InspectConfigContentOptionsEnum(str, Enum):
    CONTENT_UNSPECIFIED = "CONTENT_UNSPECIFIED"
    CONTENT_TEXT = "CONTENT_TEXT"
    CONTENT_IMAGE = "CONTENT_IMAGE"

class GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum(str, Enum):
    LIKELIHOOD_UNSPECIFIED = "LIKELIHOOD_UNSPECIFIED"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectConfig:
    r"""GooglePrivacyDlpV2InspectConfig
    Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
    """
    
    content_options: Optional[List[GooglePrivacyDlpV2InspectConfigContentOptionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOptions') }})
    custom_info_types: Optional[List[GooglePrivacyDlpV2CustomInfoType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customInfoTypes') }})
    exclude_info_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeInfoTypes') }})
    include_quote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeQuote') }})
    info_types: Optional[List[GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    limits: Optional[GooglePrivacyDlpV2FindingLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limits') }})
    min_likelihood: Optional[GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLikelihood') }})
    rule_set: Optional[List[GooglePrivacyDlpV2InspectionRuleSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleSet') }})
    
