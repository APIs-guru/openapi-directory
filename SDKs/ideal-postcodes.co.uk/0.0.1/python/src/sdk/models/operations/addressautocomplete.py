from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddressAutocompleteQueryParams:
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    postcode_outward: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postcode_outward', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class AddressAutocompleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class AddressAutocompleteRequest:
    query_params: AddressAutocompleteQueryParams = field(default=None)
    security: AddressAutocompleteSecurity = field(default=None)
    

@dataclass
class AddressAutocompleteResponse:
    address_autocomplete_response_schema: Optional[shared.AddressAutocompleteResponseSchema] = field(default=None)
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
