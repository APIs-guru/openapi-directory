from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billagent
from . import house_enum
from . import stagesummary
from . import house_enum
from . import promoter
from . import sponsor


@dataclass_json
@dataclass
class Bill:
    agent: Optional[billagent.BillAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent' }})
    bill_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billId' }})
    bill_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billTypeId' }})
    bill_withdrawn: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billWithdrawn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_house: Optional[house_enum.HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentHouse' }})
    current_stage: Optional[stagesummary.StageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStage' }})
    included_session_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedSessionIds' }})
    introduced_session_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'introducedSessionId' }})
    is_act: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAct' }})
    is_defeated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefeated' }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longTitle' }})
    originating_house: Optional[house_enum.HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originatingHouse' }})
    petition_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'petitionInformation' }})
    petitioning_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'petitioningPeriod' }})
    promoters: Optional[List[promoter.Promoter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promoters' }})
    short_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortTitle' }})
    sponsors: Optional[List[sponsor.Sponsor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsors' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
