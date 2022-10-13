from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user
from . import reply


@dataclass_json
@dataclass
class CommentQuotedFileContent:
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Comment:
    anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anchor' }})
    author: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    html_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlContent' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    quoted_file_content: Optional[CommentQuotedFileContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotedFileContent' }})
    replies: Optional[List[reply.Reply]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    resolved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolved' }})
    
