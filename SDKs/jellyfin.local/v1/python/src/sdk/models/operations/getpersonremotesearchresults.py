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
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPersonRemoteSearchResultsRequest:
    request: GetPersonRemoteSearchResultsRequests = field(default=None)
    security: GetPersonRemoteSearchResultsSecurity = field(default=None)
    

@dataclass
class GetPersonRemoteSearchResultsResponse:
    content_type: str = field(default=None)
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    status_code: int = field(default=None)
    
