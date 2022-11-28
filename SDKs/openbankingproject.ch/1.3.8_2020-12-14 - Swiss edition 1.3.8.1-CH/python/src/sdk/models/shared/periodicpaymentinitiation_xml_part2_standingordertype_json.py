from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON:
    r"""PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON
    The body part 2 of a periodic payment initation request containes the execution related informations
    of the periodic payment.
    
    """
    
    frequency: FrequencyCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    start_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    day_of_execution: Optional[DayOfExecutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfExecution') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_rule: Optional[ExecutionRuleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRule') }})
    
