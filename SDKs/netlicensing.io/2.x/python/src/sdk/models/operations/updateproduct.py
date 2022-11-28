from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateProductPathParams:
    product_number: str = field(metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    
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
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateProductRequest:
    path_params: UpdateProductPathParams = field()
    security: UpdateProductSecurity = field()
    request: Optional[UpdateProductRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateProductResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
