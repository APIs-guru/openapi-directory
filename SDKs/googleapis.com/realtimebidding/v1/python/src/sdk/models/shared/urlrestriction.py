from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import date
from . import date

class URLRestrictionRestrictionTypeEnum(str, Enum):
    RESTRICTION_TYPE_UNSPECIFIED = "RESTRICTION_TYPE_UNSPECIFIED"
    CONTAINS = "CONTAINS"
    EQUALS = "EQUALS"
    STARTS_WITH = "STARTS_WITH"
    ENDS_WITH = "ENDS_WITH"
    DOES_NOT_EQUAL = "DOES_NOT_EQUAL"
    DOES_NOT_CONTAIN = "DOES_NOT_CONTAIN"
    DOES_NOT_START_WITH = "DOES_NOT_START_WITH"
    DOES_NOT_END_WITH = "DOES_NOT_END_WITH"


@dataclass_json
@dataclass
class URLRestriction:
    end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    restriction_type: Optional[URLRestrictionRestrictionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictionType' }})
    start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
