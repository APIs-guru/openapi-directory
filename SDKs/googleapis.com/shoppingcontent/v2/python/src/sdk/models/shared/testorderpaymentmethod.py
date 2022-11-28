from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestOrderPaymentMethod:
    expiration_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationMonth') }})
    expiration_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationYear') }})
    last_four_digits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastFourDigits') }})
    predefined_billing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedBillingAddress') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
