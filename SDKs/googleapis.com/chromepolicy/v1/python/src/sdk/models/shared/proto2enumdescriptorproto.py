from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import proto2enumvaluedescriptorproto


@dataclass_json
@dataclass
class Proto2EnumDescriptorProto:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[List[proto2enumvaluedescriptorproto.Proto2EnumValueDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
