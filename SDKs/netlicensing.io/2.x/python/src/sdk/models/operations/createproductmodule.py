from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class CreateProductModuleRequestBodyLicenseTemplateEnum(str, Enum):
    TIMEVOLUME = "TIMEVOLUME"
    FEATURE = "FEATURE"

class CreateProductModuleRequestBodyNodeSecretModeEnum(str, Enum):
    PREDEFINED = "PREDEFINED"
    CLIENT = "CLIENT"


@dataclass
class CreateProductModuleRequestBody:
    active: bool = field(default=None, metadata={'form': { 'field_name': 'active' }})
    license_template: Optional[List[CreateProductModuleRequestBodyLicenseTemplateEnum]] = field(default=None, metadata={'form': { 'field_name': 'licenseTemplate' }})
    licensing_model: str = field(default=None, metadata={'form': { 'field_name': 'licensingModel' }})
    max_checkout_validity: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'maxCheckoutValidity' }})
    name: str = field(default=None, metadata={'form': { 'field_name': 'name' }})
    node_secret_mode: Optional[List[CreateProductModuleRequestBodyNodeSecretModeEnum]] = field(default=None, metadata={'form': { 'field_name': 'nodeSecretMode' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    product_number: str = field(default=None, metadata={'form': { 'field_name': 'productNumber' }})
    red_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'redThreshold' }})
    yellow_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'yellowThreshold' }})
    

@dataclass
class CreateProductModuleSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateProductModuleRequest:
    request: CreateProductModuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateProductModuleSecurity = field(default=None)
    

@dataclass
class CreateProductModuleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
