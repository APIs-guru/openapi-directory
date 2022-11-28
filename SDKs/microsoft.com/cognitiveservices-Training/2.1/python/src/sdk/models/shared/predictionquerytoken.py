from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PredictionQueryTokenOrderByEnum(str, Enum):
    NEWEST = "Newest"
    OLDEST = "Oldest"
    SUGGESTED = "Suggested"


@dataclass_json
@dataclass
class PredictionQueryToken:
    application: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    continuation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuation') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    iteration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iterationId') }})
    max_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCount') }})
    order_by: Optional[PredictionQueryTokenOrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
