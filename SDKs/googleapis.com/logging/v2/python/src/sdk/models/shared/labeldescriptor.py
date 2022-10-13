from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LabelDescriptorValueTypeEnum(str, Enum):
    STRING = "STRING"
    BOOL = "BOOL"
    INT64 = "INT64"


@dataclass_json
@dataclass
class LabelDescriptor:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value_type: Optional[LabelDescriptorValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
