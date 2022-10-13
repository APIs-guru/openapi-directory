from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceLimit:
    maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
