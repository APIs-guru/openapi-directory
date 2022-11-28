from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestResult:
    r"""SuggestResult
    One suggestion result.
    """
    
    people_suggestion: Optional[PeopleSuggestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peopleSuggestion') }})
    query_suggestion: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('querySuggestion') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    suggested_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedQuery') }})
    
