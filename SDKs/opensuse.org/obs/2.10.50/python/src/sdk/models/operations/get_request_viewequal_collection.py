from dataclasses import dataclass, field
from typing import Optional


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
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRequestViewEqualCollectionRequest:
    query_params: GetRequestViewEqualCollectionQueryParams = field(default=None)
    security: GetRequestViewEqualCollectionSecurity = field(default=None)
    

@dataclass
class GetRequestViewEqualCollectionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
