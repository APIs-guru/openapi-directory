from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import propertyreference


@dataclass_json
@dataclass
class Projection:
    property: Optional[propertyreference.PropertyReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    
