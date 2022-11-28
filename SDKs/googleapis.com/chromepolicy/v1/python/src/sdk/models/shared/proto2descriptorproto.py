from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Proto2DescriptorProto:
    r"""Proto2DescriptorProto
    Describes a message type.
    """
    
    enum_type: Optional[List[Proto2EnumDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumType') }})
    field: Optional[List[Proto2FieldDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nested_type: Optional[List[Proto2DescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestedType') }})
    oneof_decl: Optional[List[Proto2OneofDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneofDecl') }})
    
