from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLicenseePathParams:
    licensee_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetLicenseeRequest:
    path_params: GetLicenseePathParams = field(default=None)
    security: GetLicenseeSecurity = field(default=None)
    

@dataclass
class GetLicenseeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
