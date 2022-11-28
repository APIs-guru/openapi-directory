from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Summary:
    ask: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ask') }})
    base_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCurrency') }})
    bid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bid') }})
    fifty_two_week_high: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fiftyTwoWeekHigh') }})
    fifty_two_week_low: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fiftyTwoWeekLow') }})
    fifty_two_week_percent_change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fiftyTwoWeekPercentChange') }})
    four_week_percent_change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fourWeekPercentChange') }})
    high: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    last: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    low: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low') }})
    one_day_change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneDayChange') }})
    one_day_percent_change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneDayPercentChange') }})
    one_day_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneDayValue') }})
    open: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open') }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeStamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    twelve_week_percent_change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twelveWeekPercentChange') }})
    year_to_date_percent_change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearToDatePercentChange') }})
    
