from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerSessionStats:
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    search_sessions_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchSessionsCount') }})
    
