from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StandingOrderDetails:
    r"""StandingOrderDetails
    Details of underlying standing orders.
    
    """
    
    frequency: FrequencyCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    start_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    day_of_execution: Optional[DayOfExecutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfExecution') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_rule: Optional[ExecutionRuleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRule') }})
    limit_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitAmount') }})
    months_of_execution: Optional[List[MonthsOfExecutionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthsOfExecution') }})
    multiplicator: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiplicator') }})
    within_a_month_flag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withinAMonthFlag') }})
    
