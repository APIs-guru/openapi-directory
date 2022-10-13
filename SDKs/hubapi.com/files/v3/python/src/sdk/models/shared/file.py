from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    access: FileAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    archived: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    archived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archivedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_hosting_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHostingUrl' }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_usable_in_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsableInContent' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
