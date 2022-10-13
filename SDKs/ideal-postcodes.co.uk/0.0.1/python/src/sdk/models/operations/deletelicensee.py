from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteLicenseePathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    licensee_key: str = field(default=None, metadata={'path_param': { 'field_name': 'licensee_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseeSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteLicenseeRequest:
    path_params: DeleteLicenseePathParams = field(default=None)
    security: DeleteLicenseeSecurity = field(default=None)
    

@dataclass
class DeleteLicenseeResponse:
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    delete_licensee_response_schema: Optional[shared.DeleteLicenseeResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
