from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customeradditionalfieldeditfields


@dataclass_json
@dataclass
class CustomerAdditionalFieldEdit:
    customer_additional_field: Optional[customeradditionalfieldeditfields.CustomerAdditionalFieldEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_additional_field' }})
    
