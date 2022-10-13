from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphacompletequeryresponsecompletionresult
from . import googlecloudretailv2alphacompletequeryresponserecentsearchresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCompleteQueryResponse:
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    completion_results: Optional[List[googlecloudretailv2alphacompletequeryresponsecompletionresult.GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionResults' }})
    recent_search_results: Optional[List[googlecloudretailv2alphacompletequeryresponserecentsearchresult.GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentSearchResults' }})
    
