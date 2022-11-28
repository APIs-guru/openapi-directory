from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceCrowdingConfig:
    r"""SourceCrowdingConfig
    Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host \"crowd out\" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.
    """
    
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numResults') }})
    num_suggestions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numSuggestions') }})
    
