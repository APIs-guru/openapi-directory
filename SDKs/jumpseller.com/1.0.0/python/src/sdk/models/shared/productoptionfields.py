from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductOptionFieldsOptionTypeEnum(str, Enum):
    OPTION = "option"
    INPUT = "input"
    TEXT = "text"
    FILE = "file"


@dataclass_json
@dataclass
class ProductOptionFields:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    option_type: Optional[ProductOptionFieldsOptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option_type') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    values: Optional[List[ProductOptionValueFields]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
