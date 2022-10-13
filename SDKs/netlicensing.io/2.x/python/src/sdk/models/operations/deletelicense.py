from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteLicensePathParams:
    license_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteLicenseRequest:
    path_params: DeleteLicensePathParams = field(default=None)
    security: DeleteLicenseSecurity = field(default=None)
    

@dataclass
class DeleteLicenseResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
