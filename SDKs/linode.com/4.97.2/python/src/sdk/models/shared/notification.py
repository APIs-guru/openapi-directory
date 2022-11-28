from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationEntity:
    r"""NotificationEntity
    Detailed information about the Notification.
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
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
    r"""Notification
    An important, often time-sensitive item related to your Account.
    
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    entity: Optional[NotificationEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    severity: Optional[NotificationSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    type: Optional[NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('until'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('when'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
