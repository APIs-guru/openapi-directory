from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customfieldselectoptionfields


@dataclass_json
@dataclass
class CustomFieldSelectOption:
    custom_field_select_option: Optional[customfieldselectoptionfields.CustomFieldSelectOptionFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field_select_option' }})
    
