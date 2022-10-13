from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import prismacpecode


@dataclass_json
@dataclass
class BudgetSummary:
    external_budget_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalBudgetId' }})
    pre_tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preTaxAmountMicros' }})
    prisma_cpe_code: Optional[prismacpecode.PrismaCpeCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaCpeCode' }})
    tax_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmountMicros' }})
    total_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalAmountMicros' }})
    
