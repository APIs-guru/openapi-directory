from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSlugRequest:
    product_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productName' }})
    
