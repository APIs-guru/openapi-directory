from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachmentInfo:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    max_distance_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDistanceMeters' }})
    namespaced_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedType' }})
    
