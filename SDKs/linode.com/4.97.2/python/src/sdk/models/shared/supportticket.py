from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SupportTicketEntity:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class SupportTicketStatusEnum(str, Enum):
    CLOSED = "closed"
    NEW = "new"
    OPEN = "open"


@dataclass_json
@dataclass
class SupportTicket:
    attachments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    closable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closable' }})
    closed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    entity: Optional[SupportTicketEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    opened: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opened', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    opened_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opened_by' }})
    status: Optional[SupportTicketStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
