from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveLicenseePathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    licensee_key: str = field(default=None, metadata={'path_param': { 'field_name': 'licensee_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveLicenseeSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class RetrieveLicenseeRequest:
    path_params: RetrieveLicenseePathParams = field(default=None)
    security: RetrieveLicenseeSecurity = field(default=None)
    

@dataclass
class RetrieveLicenseeResponse:
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    licensee_response_schema: Optional[shared.LicenseeResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
