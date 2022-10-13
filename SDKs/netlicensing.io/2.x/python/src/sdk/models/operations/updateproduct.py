from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class UpdateProductPathParams:
    product_number: str = field(default=None, metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    
class UpdateProductRequestBodyVatModeEnum(str, Enum):
    GROSS = "GROSS"
    NET = "NET"


@dataclass
class UpdateProductRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'description' }})
    licensee_auto_create: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'licenseeAutoCreate' }})
    licensing_info: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licensingInfo' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    vat_mode: Optional[UpdateProductRequestBodyVatModeEnum] = field(default=None, metadata={'form': { 'field_name': 'vatMode' }})
    version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'version' }})
    

@dataclass
class UpdateProductSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateProductRequest:
    path_params: UpdateProductPathParams = field(default=None)
    request: Optional[UpdateProductRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateProductSecurity = field(default=None)
    

@dataclass
class UpdateProductResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
