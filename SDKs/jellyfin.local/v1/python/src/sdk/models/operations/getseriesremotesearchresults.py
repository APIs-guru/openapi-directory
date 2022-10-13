from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSeriesRemoteSearchResultsRequests:
    series_info_remote_search_query: Optional[shared.SeriesInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    series_info_remote_search_query1: Optional[shared.SeriesInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    series_info_remote_search_query2: Optional[shared.SeriesInfoRemoteSearchQuery] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetSeriesRemoteSearchResultsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSeriesRemoteSearchResultsRequest:
    request: GetSeriesRemoteSearchResultsRequests = field(default=None)
    security: GetSeriesRemoteSearchResultsSecurity = field(default=None)
    

@dataclass
class GetSeriesRemoteSearchResultsResponse:
    content_type: str = field(default=None)
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    status_code: int = field(default=None)
    
