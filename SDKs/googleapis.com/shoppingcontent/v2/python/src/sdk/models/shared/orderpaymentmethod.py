from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderaddress


@dataclass_json
@dataclass
class OrderPaymentMethod:
    billing_address: Optional[orderaddress.OrderAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAddress' }})
    expiration_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationMonth' }})
    expiration_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationYear' }})
    last_four_digits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastFourDigits' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
