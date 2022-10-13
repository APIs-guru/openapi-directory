from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams:
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNameRequest:
    path_params: GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams = field(default=None)
    

@dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse:
    content_result: Optional[shared.ContentResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
