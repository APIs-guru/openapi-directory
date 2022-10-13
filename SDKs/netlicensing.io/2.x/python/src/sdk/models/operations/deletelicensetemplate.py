from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteLicenseTemplatePathParams:
    license_template_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseTemplateQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteLicenseTemplateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteLicenseTemplateRequest:
    path_params: DeleteLicenseTemplatePathParams = field(default=None)
    query_params: DeleteLicenseTemplateQueryParams = field(default=None)
    security: DeleteLicenseTemplateSecurity = field(default=None)
    

@dataclass
class DeleteLicenseTemplateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
