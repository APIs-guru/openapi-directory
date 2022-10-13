from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvalue


@dataclass_json
@dataclass
class Product:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCategory' }})
    product_labels: Optional[List[keyvalue.KeyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productLabels' }})
    
