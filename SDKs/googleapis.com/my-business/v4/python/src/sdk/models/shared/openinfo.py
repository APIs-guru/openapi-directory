from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OpenInfoStatusEnum(str, Enum):
    OPEN_FOR_BUSINESS_UNSPECIFIED = "OPEN_FOR_BUSINESS_UNSPECIFIED"
    OPEN = "OPEN"
    CLOSED_PERMANENTLY = "CLOSED_PERMANENTLY"
    CLOSED_TEMPORARILY = "CLOSED_TEMPORARILY"


@dataclass_json
@dataclass
class OpenInfo:
    r"""OpenInfo
    Information related to the opening state of the business.
    """
    
    can_reopen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReopen') }})
    opening_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openingDate') }})
    status: Optional[OpenInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
