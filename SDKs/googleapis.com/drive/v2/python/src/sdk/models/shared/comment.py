from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user
from . import commentreply


@dataclass_json
@dataclass
class CommentContext:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Comment:
    anchor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anchor' }})
    author: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    comment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentId' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    context: Optional[CommentContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileId' }})
    file_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileTitle' }})
    html_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlContent' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replies: Optional[List[commentreply.CommentReply]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
