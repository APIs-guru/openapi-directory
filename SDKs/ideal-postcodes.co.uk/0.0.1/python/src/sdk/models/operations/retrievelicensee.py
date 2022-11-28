from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveLicenseePathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    licensee_key: str = field(metadata={'path_param': { 'field_name': 'licensee_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveLicenseeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class RetrieveLicenseeRequest:
    path_params: RetrieveLicenseePathParams = field()
    security: RetrieveLicenseeSecurity = field()
    

@dataclass
class RetrieveLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    licensee_response_schema: Optional[shared.LicenseeResponseSchema] = field(default=None)
    
