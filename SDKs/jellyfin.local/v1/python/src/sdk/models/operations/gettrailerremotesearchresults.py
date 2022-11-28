from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTrailerRemoteSearchResultsRequests:
    trailer_info_remote_search_query: Optional[shared.TrailerInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    trailer_info_remote_search_query1: Optional[shared.TrailerInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    trailer_info_remote_search_query2: Optional[shared.TrailerInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetTrailerRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTrailerRemoteSearchResultsRequest:
    request: GetTrailerRemoteSearchResultsRequests = field()
    security: GetTrailerRemoteSearchResultsSecurity = field()
    

@dataclass
class GetTrailerRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
