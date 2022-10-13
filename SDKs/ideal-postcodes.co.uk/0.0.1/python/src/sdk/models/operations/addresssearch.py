from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddressSearchQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    postcode_outward: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postcode_outward', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class AddressSearchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class AddressSearchRequest:
    query_params: AddressSearchQueryParams = field(default=None)
    security: AddressSearchSecurity = field(default=None)
    

@dataclass
class AddressSearchResponse:
    address_search_response_schema: Optional[shared.AddressSearchResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
