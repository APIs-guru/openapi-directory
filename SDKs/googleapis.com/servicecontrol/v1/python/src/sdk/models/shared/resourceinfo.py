from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceInfo:
    resource_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceContainer' }})
    resource_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceLocation' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    
