from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import accountaccess
from . import consentstatus_enum


@dataclass_json
@dataclass
class ConsentInformationResponse200JSON:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    access: accountaccess.AccountAccess = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    consent_status: consentstatus_enum.ConsentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentStatus' }})
    frequency_per_day: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyPerDay' }})
    last_action_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastActionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recurring_indicator: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringIndicator' }})
    valid_until: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validUntil', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
