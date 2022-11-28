from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filesystem: Optional[DiskFilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesystem') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: Optional[DiskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class DiskInput:
    filesystem: Optional[DiskFilesystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesystem') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
