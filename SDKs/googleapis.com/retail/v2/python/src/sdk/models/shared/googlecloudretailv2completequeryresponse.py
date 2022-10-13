from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2completequeryresponsecompletionresult
from . import googlecloudretailv2completequeryresponserecentsearchresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2CompleteQueryResponse:
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    completion_results: Optional[List[googlecloudretailv2completequeryresponsecompletionresult.GoogleCloudRetailV2CompleteQueryResponseCompletionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionResults' }})
    recent_search_results: Optional[List[googlecloudretailv2completequeryresponserecentsearchresult.GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentSearchResults' }})
    
