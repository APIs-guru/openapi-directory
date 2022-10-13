from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata
from . import googlecloudcontactcenterinsightsv1conversationparticipant
from . import googlecloudcontactcenterinsightsv1sentimentdata
from . import googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment:
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTag' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    dialogflow_segment_metadata: Optional[googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowSegmentMetadata' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    message_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageTime' }})
    segment_participant: Optional[googlecloudcontactcenterinsightsv1conversationparticipant.GoogleCloudContactcenterinsightsV1ConversationParticipant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentParticipant' }})
    sentiment: Optional[googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiment' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    words: Optional[List[googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'words' }})
    
