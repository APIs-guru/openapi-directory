from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LineItemBudgetBudgetAllocationTypeEnum(str, Enum):
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED"
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC"
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED"
    LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED = "LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED"

class LineItemBudgetBudgetUnitEnum(str, Enum):
    BUDGET_UNIT_UNSPECIFIED = "BUDGET_UNIT_UNSPECIFIED"
    BUDGET_UNIT_CURRENCY = "BUDGET_UNIT_CURRENCY"
    BUDGET_UNIT_IMPRESSIONS = "BUDGET_UNIT_IMPRESSIONS"


@dataclass_json
@dataclass
class LineItemBudget:
    budget_allocation_type: Optional[LineItemBudgetBudgetAllocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetAllocationType' }})
    budget_unit: Optional[LineItemBudgetBudgetUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetUnit' }})
    max_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAmount' }})
    
