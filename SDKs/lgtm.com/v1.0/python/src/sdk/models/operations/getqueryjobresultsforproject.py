from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetQueryJobResultsForProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    queryjob_id: str = field(default=None, metadata={'path_param': { 'field_name': 'queryjob-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryJobResultsForProjectQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    nofilter: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'nofilter', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryJobResultsForProjectSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetQueryJobResultsForProjectRequest:
    path_params: GetQueryJobResultsForProjectPathParams = field(default=None)
    query_params: GetQueryJobResultsForProjectQueryParams = field(default=None)
    security: GetQueryJobResultsForProjectSecurity = field(default=None)
    

@dataclass
class GetQueryJobResultsForProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    queryjob_project_results: Optional[shared.QueryjobProjectResults] = field(default=None)
    
