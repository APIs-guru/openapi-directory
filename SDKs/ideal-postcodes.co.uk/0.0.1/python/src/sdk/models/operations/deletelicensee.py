from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteLicenseePathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    licensee_key: str = field(metadata={'path_param': { 'field_name': 'licensee_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteLicenseeRequest:
    path_params: DeleteLicenseePathParams = field()
    security: DeleteLicenseeSecurity = field()
    

@dataclass
class DeleteLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    address_lookup_response_schema: Optional[shared.AddressLookupResponseSchema] = field(default=None)
    delete_licensee_response_schema: Optional[shared.DeleteLicenseeResponseSchema] = field(default=None)
    
