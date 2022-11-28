from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRequestViewEqualCollectionQueryParams:
    ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    roles: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'roles', 'style': 'form', 'explode': True }})
    states: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    withfullhistory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'withfullhistory', 'style': 'form', 'explode': True }})
    withhistory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'withhistory', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequestViewEqualCollectionSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRequestViewEqualCollectionRequest:
    query_params: GetRequestViewEqualCollectionQueryParams = field()
    security: GetRequestViewEqualCollectionSecurity = field()
    

@dataclass
class GetRequestViewEqualCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
