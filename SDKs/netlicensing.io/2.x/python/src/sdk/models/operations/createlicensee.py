from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateLicenseeRequestBody:
    active: bool = field(metadata={'form': { 'field_name': 'active' }})
    product_number: str = field(metadata={'form': { 'field_name': 'productNumber' }})
    marked_for_transfer: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'markedForTransfer' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    

@dataclass
class CreateLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateLicenseeRequest:
    security: CreateLicenseeSecurity = field()
    request: Optional[CreateLicenseeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CreateLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
