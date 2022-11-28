from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IngestConversationsRequest:
    r"""GoogleCloudContactcenterinsightsV1IngestConversationsRequest
    The request to ingest conversations.
    """
    
    conversation_config: Optional[GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationConfig') }})
    gcs_source: Optional[GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    transcript_object_config: Optional[GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptObjectConfig') }})
    
