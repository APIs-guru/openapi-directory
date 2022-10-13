from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLicenseTemplatePathParams:
    license_template_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLicenseTemplateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetLicenseTemplateRequest:
    path_params: GetLicenseTemplatePathParams = field(default=None)
    security: GetLicenseTemplateSecurity = field(default=None)
    

@dataclass
class GetLicenseTemplateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
