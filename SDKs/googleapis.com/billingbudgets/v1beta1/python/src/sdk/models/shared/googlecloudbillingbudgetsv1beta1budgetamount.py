from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1BudgetAmount:
    r"""GoogleCloudBillingBudgetsV1beta1BudgetAmount
    The budgeted amount for each usage period.
    """
    
    last_period_amount: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPeriodAmount') }})
    specified_amount: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specifiedAmount') }})
    
