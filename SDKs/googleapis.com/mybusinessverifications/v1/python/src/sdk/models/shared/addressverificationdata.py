from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddressVerificationData:
    r"""AddressVerificationData
    Display data for verifications through postcard.
    """
    
    address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    business: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business') }})
    expected_delivery_days_region: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedDeliveryDaysRegion') }})
    
