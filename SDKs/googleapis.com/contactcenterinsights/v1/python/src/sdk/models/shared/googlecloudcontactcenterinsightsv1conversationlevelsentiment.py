from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1sentimentdata


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationLevelSentiment:
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTag' }})
    sentiment_data: Optional[googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentData' }})
    
