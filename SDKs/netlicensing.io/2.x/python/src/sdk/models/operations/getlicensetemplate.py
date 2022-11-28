from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetLicenseTemplatePathParams:
    license_template_number: str = field(metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLicenseTemplateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetLicenseTemplateRequest:
    path_params: GetLicenseTemplatePathParams = field()
    security: GetLicenseTemplateSecurity = field()
    

@dataclass
class GetLicenseTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
