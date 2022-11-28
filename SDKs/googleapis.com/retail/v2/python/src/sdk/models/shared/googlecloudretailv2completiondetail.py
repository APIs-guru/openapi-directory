from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2CompletionDetail:
    r"""GoogleCloudRetailV2CompletionDetail
    Detailed completion information including completion attribution token and clicked completion info.
    """
    
    completion_attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionAttributionToken') }})
    selected_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedPosition') }})
    selected_suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedSuggestion') }})
    
