from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Proto2EnumValueDescriptorProto:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    
