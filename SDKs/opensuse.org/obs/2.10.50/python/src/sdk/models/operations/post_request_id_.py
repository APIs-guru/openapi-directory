from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRequestIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRequestIDQueryParams:
    by_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'by_group', 'style': 'form', 'explode': True }})
    by_package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'by_package', 'style': 'form', 'explode': True }})
    by_project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'by_project', 'style': 'form', 'explode': True }})
    by_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'by_user', 'style': 'form', 'explode': True }})
    cmd: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': False }})
    comment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'comment', 'style': 'form', 'explode': True }})
    incident: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'incident', 'style': 'form', 'explode': True }})
    newstate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'newstate', 'style': 'form', 'explode': True }})
    priority: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'priority', 'style': 'form', 'explode': True }})
    time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRequestIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRequestIDRequest:
    path_params: PostRequestIDPathParams = field()
    query_params: PostRequestIDQueryParams = field()
    security: PostRequestIDSecurity = field()
    

@dataclass
class PostRequestIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
