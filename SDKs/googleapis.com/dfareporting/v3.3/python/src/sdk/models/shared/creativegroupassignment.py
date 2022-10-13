from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreativeGroupAssignmentCreativeGroupNumberEnum(str, Enum):
    CREATIVE_GROUP_ONE = "CREATIVE_GROUP_ONE"
    CREATIVE_GROUP_TWO = "CREATIVE_GROUP_TWO"


@dataclass_json
@dataclass
class CreativeGroupAssignment:
    creative_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeGroupId' }})
    creative_group_number: Optional[CreativeGroupAssignmentCreativeGroupNumberEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeGroupNumber' }})
    
