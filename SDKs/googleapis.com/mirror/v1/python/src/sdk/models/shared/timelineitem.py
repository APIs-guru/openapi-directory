from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachment
from . import contact
from . import location
from . import menuitem
from . import notificationconfig
from . import contact


@dataclass_json
@dataclass
class TimelineItem:
    attachments: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    canonical_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalUrl' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    display_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_reply_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inReplyTo' }})
    is_bundle_cover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBundleCover' }})
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeleted' }})
    is_pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPinned' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    menu_items: Optional[List[menuitem.MenuItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'menuItems' }})
    notification: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    pin_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinScore' }})
    recipients: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    source_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceItemId' }})
    speakable_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakableText' }})
    speakable_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakableType' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
