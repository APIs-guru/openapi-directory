from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscript:
    r"""GoogleCloudContactcenterinsightsV1ConversationTranscript
    A message representing the transcript of a conversation.
    """
    
    transcript_segments: Optional[List[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptSegments') }})
    
