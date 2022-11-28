from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRequestIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequestIDQueryParams:
    withfullhistory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'withfullhistory', 'style': 'form', 'explode': True }})
    withhistory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'withhistory', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequestIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRequestIDRequest:
    path_params: GetRequestIDPathParams = field()
    query_params: GetRequestIDQueryParams = field()
    security: GetRequestIDSecurity = field()
    

@dataclass
class GetRequestIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
