from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import house_enum
from . import billstagesitting


@dataclass_json
@dataclass
class StageSummary:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    house: Optional[house_enum.HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    session_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageId' }})
    stage_sittings: Optional[List[billstagesitting.BillStageSitting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageSittings' }})
    
