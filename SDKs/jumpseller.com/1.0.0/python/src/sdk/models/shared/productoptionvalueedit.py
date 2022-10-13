from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productoptionvalueeditfields


@dataclass_json
@dataclass
class ProductOptionValueEdit:
    value: Optional[productoptionvalueeditfields.ProductOptionValueEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
