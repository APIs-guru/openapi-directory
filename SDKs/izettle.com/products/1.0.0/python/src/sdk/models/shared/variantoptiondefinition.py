from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import variantoptionproperties


@dataclass_json
@dataclass
class VariantOptionDefinition:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: List[variantoptionproperties.VariantOptionProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
