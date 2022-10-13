from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListLicenseesPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListLicenseesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    starting_after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class ListLicenseesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class ListLicenseesRequest:
    path_params: ListLicenseesPathParams = field(default=None)
    query_params: ListLicenseesQueryParams = field(default=None)
    security: ListLicenseesSecurity = field(default=None)
    

@dataclass
class ListLicenseesResponse:
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    licensee_list_response_schema: Optional[shared.LicenseeListResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
