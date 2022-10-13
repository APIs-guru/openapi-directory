from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRequestIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequestIDQueryParams:
    withfullhistory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'withfullhistory', 'style': 'form', 'explode': True }})
    withhistory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'withhistory', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequestIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRequestIDRequest:
    path_params: GetRequestIDPathParams = field(default=None)
    query_params: GetRequestIDQueryParams = field(default=None)
    security: GetRequestIDSecurity = field(default=None)
    

@dataclass
class GetRequestIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
