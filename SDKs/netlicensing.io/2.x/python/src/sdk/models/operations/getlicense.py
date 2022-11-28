from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetLicensePathParams:
    license_number: str = field(metadata={'path_param': { 'field_name': 'licenseNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLicenseSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetLicenseRequest:
    path_params: GetLicensePathParams = field()
    security: GetLicenseSecurity = field()
    

@dataclass
class GetLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
