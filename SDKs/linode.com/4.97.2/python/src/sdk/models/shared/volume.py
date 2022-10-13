from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class VolumeStatusEnum(str, Enum):
    CREATING = "creating"
    ACTIVE = "active"
    RESIZING = "resizing"
    CONTACT_SUPPORT = "contact_support"


@dataclass_json
@dataclass
class Volume:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filesystem_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesystem_path' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    linode_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_label' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[VolumeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
