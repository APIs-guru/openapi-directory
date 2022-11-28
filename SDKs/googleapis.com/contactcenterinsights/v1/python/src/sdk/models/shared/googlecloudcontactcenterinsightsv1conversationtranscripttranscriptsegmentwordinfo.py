from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo:
    r"""GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo
    Word-level info for words in a transcript.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    end_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endOffset') }})
    start_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startOffset') }})
    word: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('word') }})
    
