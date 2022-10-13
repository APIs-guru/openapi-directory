from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CustomFieldFieldsTypeEnum(str, Enum):
    TEXT = "text"
    SELECTION = "selection"
    INPUT = "input"


@dataclass_json
@dataclass
class CustomFieldFields:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: Optional[CustomFieldFieldsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
