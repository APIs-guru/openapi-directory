from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timespan


@dataclass_json
@dataclass
class ArtifactObjects:
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paths' }})
    timing: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timing' }})
    
