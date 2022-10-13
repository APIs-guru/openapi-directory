from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class Revision:
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUrl' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    export_links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportLinks' }})
    file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSize' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modifying_user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifyingUser' }})
    last_modifying_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifyingUserName' }})
    md5_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5Checksum' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    original_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalFilename' }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinned' }})
    publish_auto: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishAuto' }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    published_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedLink' }})
    published_outside_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedOutsideDomain' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
