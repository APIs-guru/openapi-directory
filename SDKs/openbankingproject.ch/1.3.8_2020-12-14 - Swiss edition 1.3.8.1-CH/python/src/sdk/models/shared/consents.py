from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import accountaccess


@dataclass_json
@dataclass
class Consents:
    access: accountaccess.AccountAccess = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    combined_service_indicator: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combinedServiceIndicator' }})
    frequency_per_day: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyPerDay' }})
    recurring_indicator: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringIndicator' }})
    valid_until: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validUntil', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
