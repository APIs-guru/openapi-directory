from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VariantOptionProperties:
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
