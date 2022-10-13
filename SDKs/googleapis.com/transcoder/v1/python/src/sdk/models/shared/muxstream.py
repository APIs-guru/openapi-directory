from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segmentsettings


@dataclass_json
@dataclass
class MuxStream:
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    elementary_streams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementaryStreams' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    segment_settings: Optional[segmentsettings.SegmentSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentSettings' }})
    
