from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ACCEPTED = "ACCEPTED"
    DISMISSED = "DISMISSED"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1InsightStateInfo:
    r"""GoogleCloudRecommenderV1beta1InsightStateInfo
    Information related to insight state.
    """
    
    state: Optional[GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMetadata') }})
    
