from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""URLRestriction
    Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
    """
    
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    restriction_type: Optional[URLRestrictionRestrictionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionType') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
