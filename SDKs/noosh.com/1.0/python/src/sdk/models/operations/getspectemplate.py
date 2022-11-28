from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecTemplatePathParams:
    spec_template_id: str = field(metadata={'path_param': { 'field_name': 'spec_template_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecTemplateRequest:
    path_params: GetSpecTemplatePathParams = field()
    

@dataclass
class GetSpecTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_template_expand_vo: Optional[Any] = field(default=None)
    
