from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detection


@dataclass_json
@dataclass
class MemoryHashSignature:
    binary_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryFamily' }})
    detections: Optional[List[detection.Detection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detections' }})
    
