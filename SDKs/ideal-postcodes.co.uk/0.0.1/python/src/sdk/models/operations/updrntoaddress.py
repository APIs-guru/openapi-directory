from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdrnToAddressPathParams:
    udprn: str = field(metadata={'path_param': { 'field_name': 'udprn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdrnToAddressQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdrnToAddressSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class UpdrnToAddressRequest:
    path_params: UpdrnToAddressPathParams = field()
    query_params: UpdrnToAddressQueryParams = field()
    security: UpdrnToAddressSecurity = field()
    

@dataclass
class UpdrnToAddressResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    udprn_to_address_response_schema: Optional[shared.UdprnToAddressResponseSchema] = field(default=None)
    
