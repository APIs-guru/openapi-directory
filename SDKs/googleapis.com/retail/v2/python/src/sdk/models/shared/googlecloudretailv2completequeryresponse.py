from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2CompleteQueryResponse:
    r"""GoogleCloudRetailV2CompleteQueryResponse
    Response of the auto-complete query.
    """
    
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    completion_results: Optional[List[GoogleCloudRetailV2CompleteQueryResponseCompletionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionResults') }})
    recent_search_results: Optional[List[GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentSearchResults') }})
    
