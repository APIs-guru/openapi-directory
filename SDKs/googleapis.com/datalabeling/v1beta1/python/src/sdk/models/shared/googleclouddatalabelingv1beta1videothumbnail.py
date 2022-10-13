from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoThumbnail:
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeOffset' }})
    
