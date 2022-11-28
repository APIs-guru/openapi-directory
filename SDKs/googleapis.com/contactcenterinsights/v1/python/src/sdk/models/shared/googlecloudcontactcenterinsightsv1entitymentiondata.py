from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum(str, Enum):
    MENTION_TYPE_UNSPECIFIED = "MENTION_TYPE_UNSPECIFIED"
    PROPER = "PROPER"
    COMMON = "COMMON"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1EntityMentionData:
    r"""GoogleCloudContactcenterinsightsV1EntityMentionData
    The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
    """
    
    entity_unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityUniqueId') }})
    sentiment: Optional[GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    type: Optional[GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
