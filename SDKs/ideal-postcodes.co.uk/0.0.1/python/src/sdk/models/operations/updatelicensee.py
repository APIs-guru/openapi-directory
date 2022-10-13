from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateLicenseePathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLicenseeSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class UpdateLicenseeRequest:
    path_params: UpdateLicenseePathParams = field(default=None)
    request: shared.UpdateLicenseeSchema = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLicenseeSecurity = field(default=None)
    

@dataclass
class UpdateLicenseeResponse:
    content_type: str = field(default=None)
    licensee_response_schema: Optional[shared.LicenseeResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
