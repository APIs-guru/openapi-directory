from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googletypemoney


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1BudgetAmount:
    last_period_amount: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPeriodAmount' }})
    specified_amount: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specifiedAmount' }})
    
