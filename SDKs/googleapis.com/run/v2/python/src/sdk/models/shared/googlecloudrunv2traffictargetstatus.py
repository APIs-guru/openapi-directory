from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRunV2TrafficTargetStatusTypeEnum(str, Enum):
    TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
    TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"


@dataclass_json
@dataclass
class GoogleCloudRunV2TrafficTargetStatus:
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percent' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    type: Optional[GoogleCloudRunV2TrafficTargetStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
