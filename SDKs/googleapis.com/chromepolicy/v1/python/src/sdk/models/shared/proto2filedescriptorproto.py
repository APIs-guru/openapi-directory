from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Proto2FileDescriptorProto:
    r"""Proto2FileDescriptorProto
    Describes a complete .proto file.
    """
    
    enum_type: Optional[List[Proto2EnumDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumType') }})
    message_type: Optional[List[Proto2DescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    syntax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syntax') }})
    
