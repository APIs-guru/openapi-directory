from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customeradditionalfieldfields


@dataclass_json
@dataclass
class CustomerAdditionalField:
    customer_additional_field: Optional[customeradditionalfieldfields.CustomerAdditionalFieldFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_additional_field' }})
    
