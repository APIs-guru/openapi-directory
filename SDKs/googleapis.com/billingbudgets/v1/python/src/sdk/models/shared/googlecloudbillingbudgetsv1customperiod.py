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
class GoogleCloudBillingBudgetsV1CustomPeriod:
    r"""GoogleCloudBillingBudgetsV1CustomPeriod
    All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).
    """
    
    end_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    start_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
