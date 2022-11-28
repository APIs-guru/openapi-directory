from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1betaCompletionInfo:
    r"""GoogleCloudDiscoveryengineV1betaCompletionInfo
    Detailed completion information including completion attribution token and clicked completion info.
    """
    
    selected_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedPosition') }})
    selected_suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedSuggestion') }})
    
