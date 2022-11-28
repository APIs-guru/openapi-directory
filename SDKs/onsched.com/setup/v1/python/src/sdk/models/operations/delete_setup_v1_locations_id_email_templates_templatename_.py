from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    template_name: str = field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest:
    path_params: DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams = field()
    

@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
    content_type: str = field()
    status_code: int = field()
    content_result: Optional[shared.ContentResult] = field(default=None)
    
