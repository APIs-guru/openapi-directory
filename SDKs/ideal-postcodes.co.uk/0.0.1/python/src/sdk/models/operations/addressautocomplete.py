from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddressAutocompleteQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    postcode_outward: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postcode_outward', 'style': 'form', 'explode': True }})
    

@dataclass
class AddressAutocompleteSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class AddressAutocompleteRequest:
    query_params: AddressAutocompleteQueryParams = field()
    security: AddressAutocompleteSecurity = field()
    

@dataclass
class AddressAutocompleteResponse:
    content_type: str = field()
    status_code: int = field()
    address_autocomplete_response_schema: Optional[shared.AddressAutocompleteResponseSchema] = field(default=None)
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    
