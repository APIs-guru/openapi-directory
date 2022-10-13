from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BadgeExpiryExpiryTypeEnum(str, Enum):
    DATE = "date"
    TIMEFRAME = "timeframe"

class BadgeExpiryTimeframeUnitEnum(str, Enum):
    DAYS = "days"
    MONTHS = "months"
    YEARS = "years"


@dataclass_json
@dataclass
class BadgeExpiry:
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expires: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires' }})
    expiry_type: Optional[BadgeExpiryExpiryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryType' }})
    timeframe_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeframeAmount' }})
    timeframe_unit: Optional[BadgeExpiryTimeframeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeframeUnit' }})
    
