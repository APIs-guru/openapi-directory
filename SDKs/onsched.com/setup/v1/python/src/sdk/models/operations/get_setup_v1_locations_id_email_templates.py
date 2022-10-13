from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1LocationsIDEmailTemplatesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1LocationsIDEmailTemplatesRequest:
    path_params: GetSetupV1LocationsIDEmailTemplatesPathParams = field(default=None)
    

@dataclass
class GetSetupV1LocationsIDEmailTemplatesResponse:
    content_type: str = field(default=None)
    email_template_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
