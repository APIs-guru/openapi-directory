from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customfieldeditfields


@dataclass_json
@dataclass
class CustomFieldEdit:
    custom_field: Optional[customfieldeditfields.CustomFieldEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field' }})
    
