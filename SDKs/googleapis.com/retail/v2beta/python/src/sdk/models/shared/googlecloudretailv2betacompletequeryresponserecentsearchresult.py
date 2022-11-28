from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult:
    r"""GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult
    Recent search of this user.
    """
    
    recent_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentSearch') }})
    
