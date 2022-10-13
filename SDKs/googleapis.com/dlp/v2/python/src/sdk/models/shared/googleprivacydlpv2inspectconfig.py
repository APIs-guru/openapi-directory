from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2custominfotype
from . import googleprivacydlpv2infotype
from . import googleprivacydlpv2findinglimits
from . import googleprivacydlpv2inspectionruleset

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
    content_options: Optional[List[GooglePrivacyDlpV2InspectConfigContentOptionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentOptions' }})
    custom_info_types: Optional[List[googleprivacydlpv2custominfotype.GooglePrivacyDlpV2CustomInfoType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customInfoTypes' }})
    exclude_info_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeInfoTypes' }})
    include_quote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeQuote' }})
    info_types: Optional[List[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypes' }})
    limits: Optional[googleprivacydlpv2findinglimits.GooglePrivacyDlpV2FindingLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limits' }})
    min_likelihood: Optional[GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLikelihood' }})
    rule_set: Optional[List[googleprivacydlpv2inspectionruleset.GooglePrivacyDlpV2InspectionRuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleSet' }})
    
