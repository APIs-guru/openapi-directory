from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum(str, Enum):
    MEDIUM_UNSPECIFIED = "MEDIUM_UNSPECIFIED"
    PHONE_CALL = "PHONE_CALL"
    CHAT = "CHAT"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    medium: Optional[GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium' }})
    training_conversations_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingConversationsCount' }})
    
