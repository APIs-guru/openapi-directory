from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateLicenseePathParams:
    licensee_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLicenseeRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    marked_for_transfer: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'markedForTransfer' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    

@dataclass
class UpdateLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateLicenseeRequest:
    path_params: UpdateLicenseePathParams = field(default=None)
    request: Optional[UpdateLicenseeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateLicenseeSecurity = field(default=None)
    

@dataclass
class UpdateLicenseeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
