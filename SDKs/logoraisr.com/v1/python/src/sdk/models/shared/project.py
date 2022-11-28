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
class Project:
    process_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('process_id') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    paypal_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paypal_payment_id') }})
    process: Optional[Process] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('process') }})
    project_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_number') }})
    project_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_title') }})
    result_file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_file_id') }})
    
