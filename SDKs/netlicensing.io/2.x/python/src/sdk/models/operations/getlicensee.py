from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetLicenseePathParams:
    licensee_number: str = field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetLicenseeRequest:
    path_params: GetLicenseePathParams = field()
    security: GetLicenseeSecurity = field()
    

@dataclass
class GetLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
