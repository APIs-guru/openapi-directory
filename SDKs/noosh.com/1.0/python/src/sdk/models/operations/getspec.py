from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    spec_id: str = field(metadata={'path_param': { 'field_name': 'spec_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecRequest:
    path_params: GetSpecPathParams = field()
    

@dataclass
class GetSpecResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    v1x1_spec_expand_vo: Optional[Any] = field(default=None)
    
