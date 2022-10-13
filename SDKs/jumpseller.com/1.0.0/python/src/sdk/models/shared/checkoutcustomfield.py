from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import checkoutcustomfieldfields


@dataclass_json
@dataclass
class CheckoutCustomField:
    checkout_custom_field: Optional[checkoutcustomfieldfields.CheckoutCustomFieldFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout_custom_field' }})
    
