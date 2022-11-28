from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuperChatEventSnippet:
    amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountMicros') }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    comment_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentText') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayString') }})
    is_super_sticker_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSuperStickerEvent') }})
    message_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageType') }})
    super_sticker_metadata: Optional[SuperStickerMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('superStickerMetadata') }})
    supporter_details: Optional[ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supporterDetails') }})
    
