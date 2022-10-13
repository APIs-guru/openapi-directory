from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoAbuseReport:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    reason_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonId' }})
    secondary_reason_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryReasonId' }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    
