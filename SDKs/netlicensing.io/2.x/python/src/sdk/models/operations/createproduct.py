from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateProductRequestBodyVatModeEnum(str, Enum):
    GROSS = "GROSS"
    NET = "NET"


@dataclass
class CreateProductRequestBody:
    active: bool = field(metadata={'form': { 'field_name': 'active' }})
    name: str = field(metadata={'form': { 'field_name': 'name' }})
    version: str = field(metadata={'form': { 'field_name': 'version' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    licensee_auto_create: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'licenseeAutoCreate' }})
    licensing_info: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licensingInfo' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    vat_mode: Optional[CreateProductRequestBodyVatModeEnum] = field(default=None, metadata={'form': { 'field_name': 'vatMode' }})
    

@dataclass
class CreateProductSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateProductRequest:
    security: CreateProductSecurity = field()
    request: Optional[CreateProductRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CreateProductResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
