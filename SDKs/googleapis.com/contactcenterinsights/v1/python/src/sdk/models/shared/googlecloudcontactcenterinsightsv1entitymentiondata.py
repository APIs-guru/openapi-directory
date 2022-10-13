from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1sentimentdata

class GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum(str, Enum):
    MENTION_TYPE_UNSPECIFIED = "MENTION_TYPE_UNSPECIFIED"
    PROPER = "PROPER"
    COMMON = "COMMON"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1EntityMentionData:
    entity_unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityUniqueId' }})
    sentiment: Optional[googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiment' }})
    type: Optional[GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
