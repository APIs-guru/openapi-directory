from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LabelDescriptorValueTypeEnum(str, Enum):
    STRING = "STRING"
    BOOL = "BOOL"
    INT64 = "INT64"


@dataclass_json
@dataclass
class LabelDescriptor:
    r"""LabelDescriptor
    A description of a label.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value_type: Optional[LabelDescriptorValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
