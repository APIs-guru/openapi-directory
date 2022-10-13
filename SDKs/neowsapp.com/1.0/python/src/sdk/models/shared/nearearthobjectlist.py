from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NearEarthObjectList:
    element_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'element_count' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    near_earth_objects: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'near_earth_objects' }})
    
