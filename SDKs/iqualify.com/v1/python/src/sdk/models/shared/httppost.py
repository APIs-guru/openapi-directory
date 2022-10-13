from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentresponse
from . import moderation


@dataclass_json
@dataclass
class HTTPPost:
    attachments: Optional[List[documentresponse.DocumentResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_facilitator_post: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFacilitatorPost' }})
    moderation: Optional[moderation.Moderation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderation' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
