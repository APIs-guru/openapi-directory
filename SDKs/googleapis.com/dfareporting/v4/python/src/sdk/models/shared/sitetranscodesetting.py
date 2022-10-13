from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SiteTranscodeSetting:
    enabled_video_formats: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledVideoFormats' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
