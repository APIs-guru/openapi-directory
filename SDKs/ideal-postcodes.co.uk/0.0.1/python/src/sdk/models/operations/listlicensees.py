from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListLicenseesPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListLicenseesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    starting_after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class ListLicenseesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class ListLicenseesRequest:
    path_params: ListLicenseesPathParams = field()
    query_params: ListLicenseesQueryParams = field()
    security: ListLicenseesSecurity = field()
    

@dataclass
class ListLicenseesResponse:
    content_type: str = field()
    status_code: int = field()
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    licensee_list_response_schema: Optional[shared.LicenseeListResponseSchema] = field(default=None)
    
