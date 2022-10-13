from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetQueryJobResultsOverviewPathParams:
    queryjob_id: str = field(default=None, metadata={'path_param': { 'field_name': 'queryjob-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryJobResultsOverviewQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryJobResultsOverviewSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetQueryJobResultsOverviewRequest:
    path_params: GetQueryJobResultsOverviewPathParams = field(default=None)
    query_params: GetQueryJobResultsOverviewQueryParams = field(default=None)
    security: GetQueryJobResultsOverviewSecurity = field(default=None)
    

@dataclass
class GetQueryJobResultsOverviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    queryjob_results_overview: Optional[shared.QueryjobResultsOverview] = field(default=None)
    
