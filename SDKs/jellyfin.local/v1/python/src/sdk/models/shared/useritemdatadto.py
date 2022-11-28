from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserItemDataDto:
    r"""UserItemDataDto
    Class UserItemDataDto.
    """
    
    is_favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsFavorite') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemId') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    last_played_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPlayedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    likes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Likes') }})
    play_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayCount') }})
    playback_position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaybackPositionTicks') }})
    played: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Played') }})
    played_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayedPercentage') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rating') }})
    unplayed_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnplayedItemCount') }})
    
