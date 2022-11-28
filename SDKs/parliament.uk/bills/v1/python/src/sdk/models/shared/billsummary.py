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
class BillSummary:
    bill_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billId') }})
    bill_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billTypeId') }})
    bill_withdrawn: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billWithdrawn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_house: Optional[HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentHouse') }})
    current_stage: Optional[StageSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStage') }})
    included_session_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedSessionIds') }})
    introduced_session_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('introducedSessionId') }})
    is_act: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAct') }})
    is_defeated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefeated') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    originating_house: Optional[HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatingHouse') }})
    short_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortTitle') }})
    
