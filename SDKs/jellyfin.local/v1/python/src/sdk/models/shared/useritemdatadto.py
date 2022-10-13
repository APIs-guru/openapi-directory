from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserItemDataDto:
    is_favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsFavorite' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemId' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    last_played_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastPlayedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    likes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Likes' }})
    play_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayCount' }})
    playback_position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaybackPositionTicks' }})
    played: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Played' }})
    played_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayedPercentage' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rating' }})
    unplayed_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnplayedItemCount' }})
    
