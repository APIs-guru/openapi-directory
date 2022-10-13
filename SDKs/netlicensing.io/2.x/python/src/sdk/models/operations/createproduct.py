from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class CreateProductRequestBodyVatModeEnum(str, Enum):
    GROSS = "GROSS"
    NET = "NET"


@dataclass
class CreateProductRequestBody:
    active: bool = field(default=None, metadata={'form': { 'field_name': 'active' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    licensee_auto_create: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'licenseeAutoCreate' }})
    licensing_info: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licensingInfo' }})
    name: str = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    vat_mode: Optional[CreateProductRequestBodyVatModeEnum] = field(default=None, metadata={'form': { 'field_name': 'vatMode' }})
    version: str = field(default=None, metadata={'form': { 'field_name': 'version' }})
    

@dataclass
class CreateProductSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateProductRequest:
    request: Optional[CreateProductRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateProductSecurity = field(default=None)
    

@dataclass
class CreateProductResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
