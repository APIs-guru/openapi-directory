from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetQueryJobResultsOverviewPathParams:
    queryjob_id: str = field(metadata={'path_param': { 'field_name': 'queryjob-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryJobResultsOverviewQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryJobResultsOverviewSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetQueryJobResultsOverviewRequest:
    path_params: GetQueryJobResultsOverviewPathParams = field()
    query_params: GetQueryJobResultsOverviewQueryParams = field()
    security: GetQueryJobResultsOverviewSecurity = field()
    

@dataclass
class GetQueryJobResultsOverviewResponse:
    content_type: str = field()
    status_code: int = field()
    queryjob_results_overview: Optional[shared.QueryjobResultsOverview] = field(default=None)
    
