from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LookupUmprnPathParams:
    umprn: str = field(default=None, metadata={'path_param': { 'field_name': 'umprn', 'style': 'simple', 'explode': False }})
    

@dataclass
class LookupUmprnQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    

@dataclass
class LookupUmprnSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class LookupUmprnRequest:
    path_params: LookupUmprnPathParams = field(default=None)
    query_params: LookupUmprnQueryParams = field(default=None)
    security: LookupUmprnSecurity = field(default=None)
    

@dataclass
class LookupUmprnResponse:
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
