from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment:
    r"""GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment
    A segment of a full transcript.
    """
    
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    dialogflow_segment_metadata: Optional[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowSegmentMetadata') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    message_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageTime') }})
    segment_participant: Optional[GoogleCloudContactcenterinsightsV1ConversationParticipant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentParticipant') }})
    sentiment: Optional[GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    words: Optional[List[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
