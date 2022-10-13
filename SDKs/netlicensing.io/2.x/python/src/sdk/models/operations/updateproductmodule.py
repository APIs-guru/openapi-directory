from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class UpdateProductModulePathParams:
    product_module_number: str = field(default=None, metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    
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
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateProductModuleRequest:
    path_params: UpdateProductModulePathParams = field(default=None)
    request: Optional[UpdateProductModuleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateProductModuleSecurity = field(default=None)
    

@dataclass
class UpdateProductModuleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
