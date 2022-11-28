from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerQueryStats:
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    query_count_by_status: Optional[List[QueryCountByStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryCountByStatus') }})
    
