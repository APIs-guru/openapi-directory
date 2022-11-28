from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationLevelSentiment:
    r"""GoogleCloudContactcenterinsightsV1ConversationLevelSentiment
    One channel of conversation-level sentiment data.
    """
    
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    sentiment_data: Optional[GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentData') }})
    
