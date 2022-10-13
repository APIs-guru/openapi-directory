from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2regex
from . import googleprivacydlpv2likelihoodadjustment
from . import googleprivacydlpv2proximity


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HotwordRule:
    hotword_regex: Optional[googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotwordRegex' }})
    likelihood_adjustment: Optional[googleprivacydlpv2likelihoodadjustment.GooglePrivacyDlpV2LikelihoodAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likelihoodAdjustment' }})
    proximity: Optional[googleprivacydlpv2proximity.GooglePrivacyDlpV2Proximity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proximity' }})
    
