from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectionsresource


@dataclass_json
@dataclass
class DetectionsListResponse:
    detections: Optional[List[List[detectionsresource.DetectionsResource]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detections' }})
    
