from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileAccessEnum(str, Enum):
    PUBLIC_INDEXABLE = "PUBLIC_INDEXABLE"
    PUBLIC_NOT_INDEXABLE = "PUBLIC_NOT_INDEXABLE"
    HIDDEN_INDEXABLE = "HIDDEN_INDEXABLE"
    HIDDEN_NOT_INDEXABLE = "HIDDEN_NOT_INDEXABLE"
    HIDDEN_PRIVATE = "HIDDEN_PRIVATE"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclass
class File:
    r"""File
    File
    """
    
    access: FileAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    archived: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    archived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archivedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_hosting_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHostingUrl') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    is_usable_in_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUsableInContent') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFolderId') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
