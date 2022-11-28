from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProductOptionEditFieldsOptionTypeEnum(str, Enum):
    OPTION = "option"
    INPUT = "input"
    TEXT = "text"
    FILE = "file"


@dataclass_json
@dataclass
class ProductOptionEditFields:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    option_type: Optional[ProductOptionEditFieldsOptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option_type') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
