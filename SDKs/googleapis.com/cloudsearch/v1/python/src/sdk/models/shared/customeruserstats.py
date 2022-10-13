from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class CustomerUserStats:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    one_day_active_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneDayActiveUsersCount' }})
    seven_days_active_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sevenDaysActiveUsersCount' }})
    thirty_days_active_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirtyDaysActiveUsersCount' }})
    
