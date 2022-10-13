from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productoptionvaluefields


@dataclass_json
@dataclass
class ProductOptionValue:
    value: Optional[productoptionvaluefields.ProductOptionValueFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
