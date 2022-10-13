from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountitemupdatessettings


@dataclass_json
@dataclass
class AccountItemUpdates:
    account_item_updates_settings: Optional[accountitemupdatessettings.AccountItemUpdatesSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountItemUpdatesSettings' }})
    effective_allow_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveAllowAvailabilityUpdates' }})
    effective_allow_condition_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveAllowConditionUpdates' }})
    effective_allow_price_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveAllowPriceUpdates' }})
    effective_allow_strict_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveAllowStrictAvailabilityUpdates' }})
    
