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
class DataSourceIndexStats:
    r"""DataSourceIndexStats
    Aggregation of items by status code as of the specified date.
    """
    
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    item_count_by_status: Optional[List[ItemCountByStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemCountByStatus') }})
    
