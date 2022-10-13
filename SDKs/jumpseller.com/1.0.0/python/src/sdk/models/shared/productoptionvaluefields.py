from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productoption
from . import variant


@dataclass_json
@dataclass
class ProductOptionValueFields:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    product_option: Optional[productoption.ProductOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_option' }})
    variants: Optional[List[variant.Variant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    
