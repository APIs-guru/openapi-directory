from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShippingMethodEditShippingMethod:
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    fetch_services_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch_services_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    postal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class ShippingMethodEdit:
    shipping_method: Optional[ShippingMethodEditShippingMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_method') }})
    
