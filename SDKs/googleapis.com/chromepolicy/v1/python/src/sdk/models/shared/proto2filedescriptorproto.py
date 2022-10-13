from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import proto2enumdescriptorproto
from . import proto2descriptorproto


@dataclass_json
@dataclass
class Proto2FileDescriptorProto:
    enum_type: Optional[List[proto2enumdescriptorproto.Proto2EnumDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumType' }})
    message_type: Optional[List[proto2descriptorproto.Proto2DescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    syntax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syntax' }})
    
