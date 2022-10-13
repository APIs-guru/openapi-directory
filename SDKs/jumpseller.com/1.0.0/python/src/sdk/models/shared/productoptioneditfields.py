from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProductOptionEditFieldsOptionTypeEnum(str, Enum):
    OPTION = "option"
    INPUT = "input"
    TEXT = "text"
    FILE = "file"


@dataclass_json
@dataclass
class ProductOptionEditFields:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    option_type: Optional[ProductOptionEditFieldsOptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option_type' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
