from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPersonRemoteSearchResultsRequests:
    person_lookup_info_remote_search_query: Optional[shared.PersonLookupInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    person_lookup_info_remote_search_query1: Optional[shared.PersonLookupInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    person_lookup_info_remote_search_query2: Optional[shared.PersonLookupInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetPersonRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPersonRemoteSearchResultsRequest:
    request: GetPersonRemoteSearchResultsRequests = field()
    security: GetPersonRemoteSearchResultsSecurity = field()
    

@dataclass
class GetPersonRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
