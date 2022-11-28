from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateLicenseePathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateLicenseeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class CreateLicenseeRequest:
    path_params: CreateLicenseePathParams = field()
    request: shared.CreateLicenseeSchema = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLicenseeSecurity = field()
    

@dataclass
class CreateLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    licensee_response_schema: Optional[shared.LicenseeResponseSchema] = field(default=None)
    
