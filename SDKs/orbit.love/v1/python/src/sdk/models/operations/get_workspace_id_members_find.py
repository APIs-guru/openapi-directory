from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWorkspaceIDMembersFindPathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDMembersFindQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    github: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'github', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    source_host: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source_host', 'style': 'form', 'explode': True }})
    uid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uid', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceIDMembersFindSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersFindRequest:
    path_params: GetWorkspaceIDMembersFindPathParams = field()
    query_params: GetWorkspaceIDMembersFindQueryParams = field()
    security: GetWorkspaceIDMembersFindSecurity = field()
    

@dataclass
class GetWorkspaceIDMembersFindResponse:
    content_type: str = field()
    status_code: int = field()
    
