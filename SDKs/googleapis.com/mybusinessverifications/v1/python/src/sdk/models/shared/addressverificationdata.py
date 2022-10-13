from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import postaladdress


@dataclass_json
@dataclass
class AddressVerificationData:
    address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    business: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business' }})
    expected_delivery_days_region: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedDeliveryDaysRegion' }})
    
