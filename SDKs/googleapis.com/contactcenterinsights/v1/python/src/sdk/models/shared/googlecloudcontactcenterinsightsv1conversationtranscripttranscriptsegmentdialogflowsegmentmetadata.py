from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata:
    r"""GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata
    Metadata from Dialogflow relating to the current transcript segment.
    """
    
    smart_reply_allowlist_covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReplyAllowlistCovered') }})
    
