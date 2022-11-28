from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddressSearchQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    postcode_outward: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postcode_outward', 'style': 'form', 'explode': True }})
    

@dataclass
class AddressSearchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class AddressSearchRequest:
    query_params: AddressSearchQueryParams = field()
    security: AddressSearchSecurity = field()
    

@dataclass
class AddressSearchResponse:
    content_type: str = field()
    status_code: int = field()
    address_search_response_schema: Optional[shared.AddressSearchResponseSchema] = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    
