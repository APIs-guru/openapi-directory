from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateQueryJobQueryParams:
    language: str = field(metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    project_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'project-id', 'style': 'form', 'explode': True }})
    projects_list: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'projects-list', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateQueryJobSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateQueryJobRequest:
    query_params: CreateQueryJobQueryParams = field()
    request: str = field(metadata={'request': { 'media_type': 'text/plain' }})
    security: CreateQueryJobSecurity = field()
    

@dataclass
class CreateQueryJobResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
