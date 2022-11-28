from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckKeyUsabilityPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckKeyUsabilityQueryParams:
    user_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_token', 'style': 'form', 'explode': True }})
    

@dataclass
class CheckKeyUsabilitySecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class CheckKeyUsabilityRequest:
    path_params: CheckKeyUsabilityPathParams = field()
    query_params: CheckKeyUsabilityQueryParams = field()
    security: CheckKeyUsabilitySecurity = field()
    

@dataclass
class CheckKeyUsabilityResponse:
    content_type: str = field()
    status_code: int = field()
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    key_usability_response_schema: Optional[shared.KeyUsabilityResponseSchema] = field(default=None)
    
