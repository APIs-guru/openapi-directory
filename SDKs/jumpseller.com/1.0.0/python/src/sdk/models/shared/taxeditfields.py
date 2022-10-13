from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaxEditFields:
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    fixed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping' }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    
