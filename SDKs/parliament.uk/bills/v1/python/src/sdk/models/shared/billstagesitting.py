from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BillStageSitting:
    bill_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billId') }})
    bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billStageId') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageId') }})
    
