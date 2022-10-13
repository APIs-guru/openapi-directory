from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dayofexecution_enum
from . import executionrule_enum
from . import frequencycode_enum


@dataclass_json
@dataclass
class PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON:
    day_of_execution: Optional[dayofexecution_enum.DayOfExecutionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfExecution' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_rule: Optional[executionrule_enum.ExecutionRuleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRule' }})
    frequency: frequencycode_enum.FrequencyCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
