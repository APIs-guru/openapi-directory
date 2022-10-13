from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class ValidateLicenseePathParams:
    licensee_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    
class ValidateLicenseeRequestBodyActionEnum(str, Enum):
    CHECK_OUT = "checkOut"
    CHECK_IN = "checkIn"


@dataclass
class ValidateLicenseeRequestBody:
    action: Optional[ValidateLicenseeRequestBodyActionEnum] = field(default=None, metadata={'form': { 'field_name': 'action' }})
    licensee_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licenseeName' }})
    node_secret: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'nodeSecret' }})
    product_module_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'productModuleNumber' }})
    product_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'productNumber' }})
    session_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'sessionId' }})
    

@dataclass
class ValidateLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ValidateLicenseeRequest:
    path_params: ValidateLicenseePathParams = field(default=None)
    request: Optional[ValidateLicenseeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: ValidateLicenseeSecurity = field(default=None)
    

@dataclass
class ValidateLicenseeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
