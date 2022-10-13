from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreativeFieldAssignment:
    creative_field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeFieldId' }})
    creative_field_value_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeFieldValueId' }})
    
