from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import paymentmethodfields


@dataclass_json
@dataclass
class PaymentMethod:
    payment_method: Optional[paymentmethodfields.PaymentMethodFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_method' }})
    
