from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerUserStats:
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    one_day_active_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneDayActiveUsersCount') }})
    seven_days_active_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sevenDaysActiveUsersCount') }})
    thirty_days_active_users_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirtyDaysActiveUsersCount') }})
    
