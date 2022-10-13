from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import producteditfields


@dataclass_json
@dataclass
class ProductEdit:
    product: Optional[producteditfields.ProductEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    
