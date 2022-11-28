from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput:
    r"""GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput
    Request for CreateBudget
    """
    
    budget: Optional[GoogleCloudBillingBudgetsV1beta1BudgetInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    
