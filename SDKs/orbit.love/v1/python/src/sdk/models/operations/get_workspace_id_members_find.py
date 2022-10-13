from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWorkspaceIDMembersFindPathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

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
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersFindRequest:
    path_params: GetWorkspaceIDMembersFindPathParams = field(default=None)
    query_params: GetWorkspaceIDMembersFindQueryParams = field(default=None)
    security: GetWorkspaceIDMembersFindSecurity = field(default=None)
    

@dataclass
class GetWorkspaceIDMembersFindResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
