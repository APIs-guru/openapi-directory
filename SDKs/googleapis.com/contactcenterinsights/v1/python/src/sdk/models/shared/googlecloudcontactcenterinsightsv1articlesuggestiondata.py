from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ArticleSuggestionData:
    r"""GoogleCloudContactcenterinsightsV1ArticleSuggestionData
    Agent Assist Article Suggestion data.
    """
    
    confidence_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceScore') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    query_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryRecord') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
