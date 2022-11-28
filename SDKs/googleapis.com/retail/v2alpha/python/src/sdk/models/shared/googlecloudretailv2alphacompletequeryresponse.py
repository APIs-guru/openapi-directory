from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCompleteQueryResponse:
    r"""GoogleCloudRetailV2alphaCompleteQueryResponse
    Response of the auto-complete query.
    """
    
    attribute_results: Optional[dict[str, GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeResults') }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    completion_results: Optional[List[GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionResults') }})
    recent_search_results: Optional[List[GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentSearchResults') }})
    
