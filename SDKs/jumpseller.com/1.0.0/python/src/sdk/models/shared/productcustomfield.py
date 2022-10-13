from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import productcustomfieldfields


@dataclass_json
@dataclass
class ProductCustomField:
    field: Optional[productcustomfieldfields.ProductCustomFieldFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    
