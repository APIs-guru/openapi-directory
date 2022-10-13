from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import moderation


@dataclass_json
@dataclass
class Comment:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_facilitator_post: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFacilitatorPost' }})
    moderation: Optional[moderation.Moderation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderation' }})
    parent_comment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentCommentId' }})
    post_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postId' }})
    
