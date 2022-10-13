from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productfields


@dataclass_json
@dataclass
class Product:
    product: Optional[productfields.ProductFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    
