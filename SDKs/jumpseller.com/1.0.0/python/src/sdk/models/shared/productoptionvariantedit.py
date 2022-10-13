from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductOptionVariantEdit:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_option_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_option_id' }})
    product_option_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_option_position' }})
    product_option_value_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_option_value_id' }})
    product_value_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_value_position' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
