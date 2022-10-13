from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import offeringmetadata


@dataclass_json
@dataclass
class OfferingMetadataResponse:
    content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentId' }})
    cover_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverImageUrl' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    early_close_off_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earlyCloseOffDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enrollment_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentLimit' }})
    has_early_close_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasEarlyCloseOff' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    is_readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReadonly' }})
    metadata: Optional[offeringmetadata.OfferingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tasks_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasksEnabled' }})
    trailer_video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trailerVideoUrl' }})
    use_relative_dates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useRelativeDates' }})
    
