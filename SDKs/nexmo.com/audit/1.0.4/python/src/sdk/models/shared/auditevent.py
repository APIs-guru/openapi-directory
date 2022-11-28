from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AuditEventSourceEnum(str, Enum):
    CD = "CD"
    DEVAPI = "DEVAPI"

class AuditEventSourceDescriptionEnum(str, Enum):
    CUSTOMER_DASHBOARD = "Customer Dashboard"
    DEVELOPER_API = "Developer API"


@dataclass_json
@dataclass
class AuditEvent:
    links: Optional[EventLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    context: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: Optional[EventTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    event_type_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type_description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source: Optional[AuditEventSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_country') }})
    source_description: Optional[AuditEventSourceDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_description') }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ip') }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_email') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
