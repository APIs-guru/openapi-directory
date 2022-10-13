from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productoptioneditfields


@dataclass_json
@dataclass
class ProductOptionEdit:
    option: Optional[productoptioneditfields.ProductOptionEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    
