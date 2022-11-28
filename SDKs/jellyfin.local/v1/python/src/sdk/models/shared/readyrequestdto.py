from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReadyRequestDto:
    r"""ReadyRequestDto
    Class ReadyRequest.
    """
    
    is_playing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPlaying') }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaylistItemId') }})
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PositionTicks') }})
    when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('When'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
