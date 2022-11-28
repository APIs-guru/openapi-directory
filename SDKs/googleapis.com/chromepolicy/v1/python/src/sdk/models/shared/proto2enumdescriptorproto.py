from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Proto2EnumDescriptorProto:
    r"""Proto2EnumDescriptorProto
    Describes an enum type.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[List[Proto2EnumValueDescriptorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
