from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteLicenseTemplatePathParams:
    license_template_number: str = field(metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLicenseTemplateQueryParams:
    force_cascade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteLicenseTemplateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteLicenseTemplateRequest:
    path_params: DeleteLicenseTemplatePathParams = field()
    query_params: DeleteLicenseTemplateQueryParams = field()
    security: DeleteLicenseTemplateSecurity = field()
    

@dataclass
class DeleteLicenseTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
