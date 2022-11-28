from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRunV2TrafficTargetStatusTypeEnum(str, Enum):
    TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
    TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"


@dataclass_json
@dataclass
class GoogleCloudRunV2TrafficTargetStatus:
    r"""GoogleCloudRunV2TrafficTargetStatus
    Represents the observed state of a single `TrafficTarget` entry.
    """
    
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    type: Optional[GoogleCloudRunV2TrafficTargetStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
