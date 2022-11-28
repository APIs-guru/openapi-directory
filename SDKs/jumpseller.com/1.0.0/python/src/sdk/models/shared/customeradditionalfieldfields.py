from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerAdditionalFieldFields:
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    checkout_custom_field_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkout_custom_field_id') }})
    customer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
