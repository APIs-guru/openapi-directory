from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CreateLicenseeRequestBody:
    active: bool = field(default=None, metadata={'form': { 'field_name': 'active' }})
    marked_for_transfer: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'markedForTransfer' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    product_number: str = field(default=None, metadata={'form': { 'field_name': 'productNumber' }})
    

@dataclass
class CreateLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateLicenseeRequest:
    request: Optional[CreateLicenseeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateLicenseeSecurity = field(default=None)
    

@dataclass
class CreateLicenseeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
