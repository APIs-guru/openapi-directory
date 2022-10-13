from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DynamicGroupStatusStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    UP_TO_DATE = "UP_TO_DATE"
    UPDATING_MEMBERSHIPS = "UPDATING_MEMBERSHIPS"
    INVALID_QUERY = "INVALID_QUERY"


@dataclass_json
@dataclass
class DynamicGroupStatus:
    status: Optional[DynamicGroupStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusTime' }})
    
