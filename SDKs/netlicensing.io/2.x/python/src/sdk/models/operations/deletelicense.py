from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteLicensePathParams:
    license_number: str = field(metadata={'path_param': { 'field_name': 'licenseNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteLicenseRequest:
    path_params: DeleteLicensePathParams = field()
    security: DeleteLicenseSecurity = field()
    

@dataclass
class DeleteLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
