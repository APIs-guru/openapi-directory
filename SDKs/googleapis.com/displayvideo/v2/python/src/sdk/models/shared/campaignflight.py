from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import daterange


@dataclass_json
@dataclass
class CampaignFlight:
    planned_dates: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plannedDates' }})
    planned_spend_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plannedSpendAmountMicros' }})
    
