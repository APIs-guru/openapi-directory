from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlaylistItemContentDetails:
    end_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endAt' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    start_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAt' }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    video_published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoPublishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
