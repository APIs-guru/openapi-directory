from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckKeyUsabilityPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckKeyUsabilityQueryParams:
    user_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_token', 'style': 'form', 'explode': True }})
    

@dataclass
class CheckKeyUsabilitySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class CheckKeyUsabilityRequest:
    path_params: CheckKeyUsabilityPathParams = field(default=None)
    query_params: CheckKeyUsabilityQueryParams = field(default=None)
    security: CheckKeyUsabilitySecurity = field(default=None)
    

@dataclass
class CheckKeyUsabilityResponse:
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    key_usability_response_schema: Optional[shared.KeyUsabilityResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
