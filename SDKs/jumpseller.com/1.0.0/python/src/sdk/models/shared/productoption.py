from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productoptionfields


@dataclass_json
@dataclass
class ProductOption:
    option: Optional[productoptionfields.ProductOptionFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    
