from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetBoxSetRemoteSearchResultsRequests:
    box_set_info_remote_search_query: Optional[shared.BoxSetInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    box_set_info_remote_search_query1: Optional[shared.BoxSetInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    box_set_info_remote_search_query2: Optional[shared.BoxSetInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetBoxSetRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBoxSetRemoteSearchResultsRequest:
    request: GetBoxSetRemoteSearchResultsRequests = field()
    security: GetBoxSetRemoteSearchResultsSecurity = field()
    

@dataclass
class GetBoxSetRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
