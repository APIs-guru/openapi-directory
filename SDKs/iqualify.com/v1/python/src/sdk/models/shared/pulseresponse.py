from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import pulseanswer


@dataclass_json
@dataclass
class PulseResponse:
    learner_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnerFirstName' }})
    learner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnerId' }})
    learner_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnerLastName' }})
    pulse_base_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulseBaseId' }})
    pulse_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulseInstanceId' }})
    pulse_question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulseQuestion' }})
    pulse_run_duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulseRunDurationMinutes' }})
    pulse_run_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulseRunStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pulse_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pulseType' }})
    response: Optional[pulseanswer.PulseAnswer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    response_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
