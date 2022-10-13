from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import superstickermetadata
from . import channelprofiledetails


@dataclass_json
@dataclass
class SuperChatEventSnippet:
    amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountMicros' }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    comment_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentText' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    display_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayString' }})
    is_super_sticker_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSuperStickerEvent' }})
    message_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageType' }})
    super_sticker_metadata: Optional[superstickermetadata.SuperStickerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'superStickerMetadata' }})
    supporter_details: Optional[channelprofiledetails.ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supporterDetails' }})
    
