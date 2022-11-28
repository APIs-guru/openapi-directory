from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectsSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProjectsRequest:
    query_params: GetProjectsQueryParams = field()
    security: GetProjectsSecurity = field()
    

@dataclass
class GetProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    project_list: Optional[shared.ProjectList] = field(default=None)
    
