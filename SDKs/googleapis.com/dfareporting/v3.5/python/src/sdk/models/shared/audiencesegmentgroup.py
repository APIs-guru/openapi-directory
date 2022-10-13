from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audiencesegment


@dataclass_json
@dataclass
class AudienceSegmentGroup:
    audience_segments: Optional[List[audiencesegment.AudienceSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceSegments' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
