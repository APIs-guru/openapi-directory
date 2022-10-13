from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BufferRequestDto:
    is_playing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPlaying' }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaylistItemId' }})
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PositionTicks' }})
    when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'When', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
