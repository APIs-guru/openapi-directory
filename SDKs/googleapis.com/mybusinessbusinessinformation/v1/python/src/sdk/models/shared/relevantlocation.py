from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RelevantLocationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DEPARTMENT_OF = "DEPARTMENT_OF"
    INDEPENDENT_ESTABLISHMENT_IN = "INDEPENDENT_ESTABLISHMENT_IN"


@dataclass_json
@dataclass
class RelevantLocation:
    r"""RelevantLocation
    Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.
    """
    
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    relation_type: Optional[RelevantLocationRelationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationType') }})
    
