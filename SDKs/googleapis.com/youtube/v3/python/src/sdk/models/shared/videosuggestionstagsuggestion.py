from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoSuggestionsTagSuggestion:
    r"""VideoSuggestionsTagSuggestion
    A single tag suggestion with it's relevance information.
    """
    
    category_restricts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryRestricts') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
