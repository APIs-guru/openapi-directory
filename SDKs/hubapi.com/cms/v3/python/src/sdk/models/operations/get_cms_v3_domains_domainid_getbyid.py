from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCmsV3DomainsDomainIDGetByIDPathParams:
    domain_id: str = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCmsV3DomainsDomainIDGetByIDSecurity:
    hapikey: shared.SchemeHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCmsV3DomainsDomainIDGetByIDRequest:
    path_params: GetCmsV3DomainsDomainIDGetByIDPathParams = field()
    security: GetCmsV3DomainsDomainIDGetByIDSecurity = field()
    

@dataclass
class GetCmsV3DomainsDomainIDGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    
