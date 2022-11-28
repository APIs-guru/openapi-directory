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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSeriesRemoteSearchResultsRequest:
    request: GetSeriesRemoteSearchResultsRequests = field()
    security: GetSeriesRemoteSearchResultsSecurity = field()
    

@dataclass
class GetSeriesRemoteSearchResultsResponse:
    content_type: str = field()
    status_code: int = field()
    remote_search_results: Optional[List[shared.RemoteSearchResult]] = field(default=None)
    
