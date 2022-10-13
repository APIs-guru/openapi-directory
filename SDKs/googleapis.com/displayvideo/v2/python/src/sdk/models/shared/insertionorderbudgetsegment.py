from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import daterange


@dataclass_json
@dataclass
class InsertionOrderBudgetSegment:
    budget_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgetAmountMicros' }})
    campaign_budget_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignBudgetId' }})
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
