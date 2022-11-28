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
class Report:
    file_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_id') }})
    process_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('process_id') }})
    report_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_number') }})
    result_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_id') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    result: Optional[Result] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
