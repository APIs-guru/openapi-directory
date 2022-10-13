from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DiskFilesystemEnum(str, Enum):
    RAW = "raw"
    SWAP = "swap"
    EXT3 = "ext3"
    EXT4 = "ext4"
    INITRD = "initrd"

class DiskStatusEnum(str, Enum):
    READY = "ready"
    NOT_READY = "not ready"
    DELETING = "deleting"


@dataclass_json
@dataclass
class Disk:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filesystem: Optional[DiskFilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesystem' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[DiskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
