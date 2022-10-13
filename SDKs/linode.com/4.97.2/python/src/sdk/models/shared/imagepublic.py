from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ImagePublicStatusEnum(str, Enum):
    CREATING = "creating"
    PENDING_UPLOAD = "pending_upload"
    AVAILABLE = "available"

class ImagePublicTypeEnum(str, Enum):
    MANUAL = "manual"
    AUTOMATIC = "automatic"


@dataclass_json
@dataclass
class ImagePublic:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    eol: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eol', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_public' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[ImagePublicStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[ImagePublicTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    
