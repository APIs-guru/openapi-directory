from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductAspect:
    aspect_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectName' }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    intention: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intention' }})
    
