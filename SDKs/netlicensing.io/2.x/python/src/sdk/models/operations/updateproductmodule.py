from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateProductModulePathParams:
    product_module_number: str = field(metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    
class UpdateProductModuleRequestBodyLicenseTemplateEnum(str, Enum):
    TIMEVOLUME = "TIMEVOLUME"
    FEATURE = "FEATURE"

class UpdateProductModuleRequestBodyNodeSecretModeEnum(str, Enum):
    PREDEFINED = "PREDEFINED"
    CLIENT = "CLIENT"


@dataclass
class UpdateProductModuleRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    license_template: Optional[List[UpdateProductModuleRequestBodyLicenseTemplateEnum]] = field(default=None, metadata={'form': { 'field_name': 'licenseTemplate' }})
    licensing_model: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licensingModel' }})
    max_checkout_validity: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'maxCheckoutValidity' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    node_secret_mode: Optional[List[UpdateProductModuleRequestBodyNodeSecretModeEnum]] = field(default=None, metadata={'form': { 'field_name': 'nodeSecretMode' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    red_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'redThreshold' }})
    yellow_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'yellowThreshold' }})
    

@dataclass
class UpdateProductModuleSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateProductModuleRequest:
    path_params: UpdateProductModulePathParams = field()
    security: UpdateProductModuleSecurity = field()
    request: Optional[UpdateProductModuleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateProductModuleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
