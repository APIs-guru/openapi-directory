from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BeaconAttachment:
    attachment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentName' }})
    creation_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimeMs' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    max_distance_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDistanceMeters' }})
    namespaced_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedType' }})
    
