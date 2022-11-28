from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SupportTicketEntity:
    r"""SupportTicketEntity
    The entity this Ticket was opened for.
    
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class SupportTicketStatusEnum(str, Enum):
    CLOSED = "closed"
    NEW = "new"
    OPEN = "open"


@dataclass_json
@dataclass
class SupportTicket:
    r"""SupportTicket
    A Support Ticket opened on your Account.
    
    """
    
    attachments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    closable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closable') }})
    closed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    entity: Optional[SupportTicketEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    opened: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opened'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    opened_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opened_by') }})
    status: Optional[SupportTicketStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    
