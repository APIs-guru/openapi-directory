from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import checkoutcustomfieldeditfields


@dataclass_json
@dataclass
class CheckoutCustomFieldEdit:
    checkout_custom_field: Optional[checkoutcustomfieldeditfields.CheckoutCustomFieldEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout_custom_field' }})
    
