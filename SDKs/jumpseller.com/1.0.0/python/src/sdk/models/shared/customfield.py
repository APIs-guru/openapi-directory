from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customfieldfields


@dataclass_json
@dataclass
class CustomField:
    custom_field: Optional[customfieldfields.CustomFieldFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field' }})
    
