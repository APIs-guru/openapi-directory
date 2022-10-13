from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import date

class OpenInfoStatusEnum(str, Enum):
    OPEN_FOR_BUSINESS_UNSPECIFIED = "OPEN_FOR_BUSINESS_UNSPECIFIED"
    OPEN = "OPEN"
    CLOSED_PERMANENTLY = "CLOSED_PERMANENTLY"
    CLOSED_TEMPORARILY = "CLOSED_TEMPORARILY"


@dataclass_json
@dataclass
class OpenInfo:
    can_reopen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReopen' }})
    opening_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openingDate' }})
    status: Optional[OpenInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
