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
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostFullCapabilitiesRequest:
    query_params: PostFullCapabilitiesQueryParams = field(default=None)
    request: PostFullCapabilitiesRequests = field(default=None)
    security: PostFullCapabilitiesSecurity = field(default=None)
    

@dataclass
class PostFullCapabilitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
