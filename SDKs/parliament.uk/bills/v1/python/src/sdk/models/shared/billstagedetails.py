from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import committee
from . import house_enum
from . import billstagesitting


@dataclass_json
@dataclass
class BillStageDetails:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    committee: Optional[committee.Committee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    house: Optional[house_enum.HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_stage_bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextStageBillStageId' }})
    previous_stage_bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousStageBillStageId' }})
    session_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageId' }})
    stage_sittings: Optional[List[billstagesitting.BillStageSitting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageSittings' }})
    
