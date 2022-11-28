from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum(str, Enum):
    MEDIUM_UNSPECIFIED = "MEDIUM_UNSPECIFIED"
    PHONE_CALL = "PHONE_CALL"
    CHAT = "CHAT"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig:
    r"""GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig
    Configuration for processing transcript objects.
    """
    
    medium: Optional[GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    
