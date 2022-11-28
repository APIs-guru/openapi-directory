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
class GoogleCloudChannelV1DateRange:
    r"""GoogleCloudChannelV1DateRange
    A representation of usage or invoice date ranges.
    """
    
    invoice_end_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceEndDate') }})
    invoice_start_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceStartDate') }})
    usage_end_date_time: Optional[GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageEndDateTime') }})
    usage_start_date_time: Optional[GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageStartDateTime') }})
    
