from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import productoptionvaluefields

class ProductOptionFieldsOptionTypeEnum(str, Enum):
    OPTION = "option"
    INPUT = "input"
    TEXT = "text"
    FILE = "file"


@dataclass_json
@dataclass
class ProductOptionFields:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    option_type: Optional[ProductOptionFieldsOptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option_type' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    values: Optional[List[productoptionvaluefields.ProductOptionValueFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
