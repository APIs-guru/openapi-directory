from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFullCapabilitiesQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class PostFullCapabilitiesRequests:
    client_capabilities_dto: Optional[shared.ClientCapabilitiesDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    client_capabilities_dto1: Optional[shared.ClientCapabilitiesDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    client_capabilities_dto2: Optional[shared.ClientCapabilitiesDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostFullCapabilitiesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostFullCapabilitiesRequest:
    query_params: PostFullCapabilitiesQueryParams = field()
    request: PostFullCapabilitiesRequests = field()
    security: PostFullCapabilitiesSecurity = field()
    

@dataclass
class PostFullCapabilitiesResponse:
    content_type: str = field()
    status_code: int = field()
    
