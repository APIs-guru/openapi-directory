from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetSummary:
    r"""BudgetSummary
    Summarized information of an individual campaign budget.
    """
    
    external_budget_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalBudgetId') }})
    pre_tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preTaxAmountMicros') }})
    prisma_cpe_code: Optional[PrismaCpeCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaCpeCode') }})
    tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmountMicros') }})
    total_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmountMicros') }})
    
