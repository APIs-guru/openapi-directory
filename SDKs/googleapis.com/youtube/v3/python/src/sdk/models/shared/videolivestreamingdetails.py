from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoLiveStreamingDetails:
    active_live_chat_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeLiveChatId' }})
    actual_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actualEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    actual_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actualStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    concurrent_viewers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentViewers' }})
    scheduled_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
