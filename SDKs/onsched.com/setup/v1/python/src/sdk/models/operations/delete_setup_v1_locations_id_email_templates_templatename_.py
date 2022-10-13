from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest:
    path_params: DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams = field(default=None)
    

@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
    content_result: Optional[shared.ContentResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
