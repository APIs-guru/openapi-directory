from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BillingRateTieredRate:
    high_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highValue' }})
    low_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowValue' }})
    rate_in_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateInMicros' }})
    
