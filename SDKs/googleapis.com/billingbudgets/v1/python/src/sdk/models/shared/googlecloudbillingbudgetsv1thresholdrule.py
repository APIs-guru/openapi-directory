from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum(str, Enum):
    BASIS_UNSPECIFIED = "BASIS_UNSPECIFIED"
    CURRENT_SPEND = "CURRENT_SPEND"
    FORECASTED_SPEND = "FORECASTED_SPEND"


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1ThresholdRule:
    spend_basis: Optional[GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spendBasis' }})
    threshold_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdPercent' }})
    
