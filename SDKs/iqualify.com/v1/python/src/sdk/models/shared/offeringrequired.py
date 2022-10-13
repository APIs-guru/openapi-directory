from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import badgeexpiry


@dataclass_json
@dataclass
class OfferingRequiredBadge:
    badge_expiry: Optional[badgeexpiry.BadgeExpiry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeExpiry' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    requires_approval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiresApproval' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class OfferingRequiredMetadata:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    

@dataclass_json
@dataclass
class OfferingRequired:
    badge: Optional[OfferingRequiredBadge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badge' }})
    content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentId' }})
    create_default_channels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDefaultChannels' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    early_close_off_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earlyCloseOffDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    has_early_close_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasEarlyCloseOff' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    is_readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReadonly' }})
    metadata: Optional[OfferingRequiredMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    root_content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootContentId' }})
    start: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trailer_video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailerVideoUrl' }})
    use_relative_dates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useRelativeDates' }})
    
