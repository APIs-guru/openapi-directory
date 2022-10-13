from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdrnToAddressPathParams:
    udprn: str = field(default=None, metadata={'path_param': { 'field_name': 'udprn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdrnToAddressQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdrnToAddressSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class UpdrnToAddressRequest:
    path_params: UpdrnToAddressPathParams = field(default=None)
    query_params: UpdrnToAddressQueryParams = field(default=None)
    security: UpdrnToAddressSecurity = field(default=None)
    

@dataclass
class UpdrnToAddressResponse:
    content_type: str = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    udprn_to_address_response_schema: Optional[shared.UdprnToAddressResponseSchema] = field(default=None)
    
