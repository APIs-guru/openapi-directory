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
class BillStageDetails:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    committee: Optional[Committee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    house: Optional[HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('house') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_stage_bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextStageBillStageId') }})
    previous_stage_bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousStageBillStageId') }})
    session_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageId') }})
    stage_sittings: Optional[List[BillStageSitting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageSittings') }})
    
