from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SegmentSettings:
    individual_segments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individualSegments' }})
    segment_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentDuration' }})
    
