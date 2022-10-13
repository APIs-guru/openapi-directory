from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscript:
    transcript_segments: Optional[List[googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment.GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcriptSegments' }})
    
