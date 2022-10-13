from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata:
    smart_reply_allowlist_covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartReplyAllowlistCovered' }})
    
