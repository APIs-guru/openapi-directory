from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerAdditionalFieldEditFields:
    checkout_custom_field_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout_custom_field_id' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
