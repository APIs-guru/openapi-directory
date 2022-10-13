from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectsSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProjectsRequest:
    query_params: GetProjectsQueryParams = field(default=None)
    security: GetProjectsSecurity = field(default=None)
    

@dataclass
class GetProjectsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    project_list: Optional[shared.ProjectList] = field(default=None)
    
