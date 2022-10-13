from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LookupUdprnPathParams:
    udprn: str = field(default=None, metadata={'path_param': { 'field_name': 'udprn', 'style': 'simple', 'explode': False }})
    

@dataclass
class LookupUdprnQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    

@dataclass
class LookupUdprnSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class LookupUdprnRequest:
    path_params: LookupUdprnPathParams = field(default=None)
    query_params: LookupUdprnQueryParams = field(default=None)
    security: LookupUdprnSecurity = field(default=None)
    

@dataclass
class LookupUdprnResponse:
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
