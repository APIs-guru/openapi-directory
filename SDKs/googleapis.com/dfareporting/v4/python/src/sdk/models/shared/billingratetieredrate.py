from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BillingRateTieredRate:
    high_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highValue') }})
    low_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowValue') }})
    rate_in_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateInMicros') }})
    
