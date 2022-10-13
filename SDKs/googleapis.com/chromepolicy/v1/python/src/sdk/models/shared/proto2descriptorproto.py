from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import proto2enumdescriptorproto
from . import proto2fielddescriptorproto
from . import proto2descriptorproto
from . import proto2oneofdescriptorproto


@dataclass_json
@dataclass
class Proto2DescriptorProto:
    enum_type: Optional[List[proto2enumdescriptorproto.Proto2EnumDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumType' }})
    field: Optional[List[proto2fielddescriptorproto.Proto2FieldDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nested_type: Optional[List[proto2descriptorproto.Proto2DescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestedType' }})
    oneof_decl: Optional[List[proto2oneofdescriptorproto.Proto2OneofDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneofDecl' }})
    
