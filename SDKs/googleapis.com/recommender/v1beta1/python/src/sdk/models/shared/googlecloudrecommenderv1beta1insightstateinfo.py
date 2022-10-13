from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ACCEPTED = "ACCEPTED"
    DISMISSED = "DISMISSED"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1InsightStateInfo:
    state: Optional[GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMetadata' }})
    
