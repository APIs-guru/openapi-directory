from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCmsV3DomainsDomainIDGetByIDPathParams:
    domain_id: str = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCmsV3DomainsDomainIDGetByIDQueryParams:
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCmsV3DomainsDomainIDGetByIDSecurity:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCmsV3DomainsDomainIDGetByIDRequest:
    path_params: GetCmsV3DomainsDomainIDGetByIDPathParams = field(default=None)
    query_params: GetCmsV3DomainsDomainIDGetByIDQueryParams = field(default=None)
    security: GetCmsV3DomainsDomainIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetCmsV3DomainsDomainIDGetByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    status_code: int = field(default=None)
    
