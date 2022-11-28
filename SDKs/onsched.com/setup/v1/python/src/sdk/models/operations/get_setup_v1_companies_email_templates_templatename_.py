from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams:
    template_name: str = field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNameRequest:
    path_params: GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams = field()
    

@dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse:
    content_type: str = field()
    status_code: int = field()
    content_result: Optional[shared.ContentResult] = field(default=None)
    
