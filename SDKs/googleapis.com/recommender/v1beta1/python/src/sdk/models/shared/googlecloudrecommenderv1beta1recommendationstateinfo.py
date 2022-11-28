from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CLAIMED = "CLAIMED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DISMISSED = "DISMISSED"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1RecommendationStateInfo:
    r"""GoogleCloudRecommenderV1beta1RecommendationStateInfo
    Information for state. Contains state and metadata.
    """
    
    state: Optional[GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMetadata') }})
    
