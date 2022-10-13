from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacompletequeryresponsecompletionresult
from . import googlecloudretailv2betacompletequeryresponserecentsearchresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCompleteQueryResponse:
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    completion_results: Optional[List[googlecloudretailv2betacompletequeryresponsecompletionresult.GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionResults' }})
    recent_search_results: Optional[List[googlecloudretailv2betacompletequeryresponserecentsearchresult.GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentSearchResults' }})
    
