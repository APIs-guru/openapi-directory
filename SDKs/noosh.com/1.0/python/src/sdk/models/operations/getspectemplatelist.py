from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecTemplateListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecTemplateListRequest:
    path_params: GetSpecTemplateListPathParams = field()
    

@dataclass
class GetSpecTemplateListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_template_list_vo: Optional[Any] = field(default=None)
    
