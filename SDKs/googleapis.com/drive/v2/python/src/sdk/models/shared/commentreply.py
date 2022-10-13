from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class CommentReply:
    author: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    html_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlContent' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reply_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyId' }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verb' }})
    
