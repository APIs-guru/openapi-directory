from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostcodeToAddressesPathParams:
    postcode: str = field(default=None, metadata={'path_param': { 'field_name': 'postcode', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostcodeToAddressesQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class PostcodeToAddressesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostcodeToAddressesRequest:
    path_params: PostcodeToAddressesPathParams = field(default=None)
    query_params: PostcodeToAddressesQueryParams = field(default=None)
    security: PostcodeToAddressesSecurity = field(default=None)
    

@dataclass
class PostcodeToAddressesResponse:
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    postcode_to_address_response_schema: Optional[shared.PostcodeToAddressResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
