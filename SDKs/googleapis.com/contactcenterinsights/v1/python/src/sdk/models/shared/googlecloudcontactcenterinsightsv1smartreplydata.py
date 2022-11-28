from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1SmartReplyData:
    r"""GoogleCloudContactcenterinsightsV1SmartReplyData
    Agent Assist Smart Reply data.
    """
    
    confidence_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceScore') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    query_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryRecord') }})
    reply: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply') }})
    
