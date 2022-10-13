from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotificationEntity:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class NotificationSeverityEnum(str, Enum):
    MINOR = "minor"
    MAJOR = "major"
    CRITICAL = "critical"

class NotificationTypeEnum(str, Enum):
    MIGRATION_SCHEDULED = "migration_scheduled"
    MIGRATION_IMMINENT = "migration_imminent"
    MIGRATION_PENDING = "migration_pending"
    REBOOT_SCHEDULED = "reboot_scheduled"
    OUTAGE = "outage"
    PAYMENT_DUE = "payment_due"
    TICKET_IMPORTANT = "ticket_important"
    TICKET_ABUSE = "ticket_abuse"
    NOTICE = "notice"
    MAINTENANCE = "maintenance"
    PROMOTION = "promotion"


@dataclass_json
@dataclass
class Notification:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    entity: Optional[NotificationEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    severity: Optional[NotificationSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    type: Optional[NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'until', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'when', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
