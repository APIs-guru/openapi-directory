from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountItemUpdatesSettings:
    allow_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAvailabilityUpdates' }})
    allow_condition_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowConditionUpdates' }})
    allow_price_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPriceUpdates' }})
    allow_strict_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowStrictAvailabilityUpdates' }})
    
