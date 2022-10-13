from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import product


@dataclass_json
@dataclass
class Result:
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    product: Optional[product.Product] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
