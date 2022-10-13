from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2value
from . import googleprivacydlpv2value
from . import googleprivacydlpv2value


@dataclass_json
@dataclass
class GooglePrivacyDlpV2NumericalStatsResult:
    max_value: Optional[googleprivacydlpv2value.GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[googleprivacydlpv2value.GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    quantile_values: Optional[List[googleprivacydlpv2value.GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantileValues' }})
    
