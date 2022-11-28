from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestOrderDeliveryDetails:
    address: Optional[TestOrderAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    is_scheduled_delivery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isScheduledDelivery') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
