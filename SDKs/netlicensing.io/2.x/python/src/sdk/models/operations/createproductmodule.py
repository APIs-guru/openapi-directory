from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class CreateProductModuleRequestBodyLicenseTemplateEnum(str, Enum):
    TIMEVOLUME = "TIMEVOLUME"
    FEATURE = "FEATURE"

class CreateProductModuleRequestBodyNodeSecretModeEnum(str, Enum):
    PREDEFINED = "PREDEFINED"
    CLIENT = "CLIENT"


@dataclass
class CreateProductModuleRequestBody:
    active: bool = field(metadata={'form': { 'field_name': 'active' }})
    licensing_model: str = field(metadata={'form': { 'field_name': 'licensingModel' }})
    name: str = field(metadata={'form': { 'field_name': 'name' }})
    product_number: str = field(metadata={'form': { 'field_name': 'productNumber' }})
    license_template: Optional[List[CreateProductModuleRequestBodyLicenseTemplateEnum]] = field(default=None, metadata={'form': { 'field_name': 'licenseTemplate' }})
    max_checkout_validity: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'maxCheckoutValidity' }})
    node_secret_mode: Optional[List[CreateProductModuleRequestBodyNodeSecretModeEnum]] = field(default=None, metadata={'form': { 'field_name': 'nodeSecretMode' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    red_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'redThreshold' }})
    yellow_threshold: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'yellowThreshold' }})
    

@dataclass
class CreateProductModuleSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateProductModuleRequest:
    request: CreateProductModuleRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateProductModuleSecurity = field()
    

@dataclass
class CreateProductModuleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
