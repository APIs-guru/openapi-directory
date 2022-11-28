from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreativeGroupAssignmentCreativeGroupNumberEnum(str, Enum):
    CREATIVE_GROUP_ONE = "CREATIVE_GROUP_ONE"
    CREATIVE_GROUP_TWO = "CREATIVE_GROUP_TWO"


@dataclass_json
@dataclass
class CreativeGroupAssignment:
    r"""CreativeGroupAssignment
    Creative Group Assignment.
    """
    
    creative_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupId') }})
    creative_group_number: Optional[CreativeGroupAssignmentCreativeGroupNumberEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupNumber') }})
    
