from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    spec_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spec_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecRequest:
    path_params: GetSpecPathParams = field(default=None)
    

@dataclass
class GetSpecResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    v1x1_spec_expand_vo: Optional[Any] = field(default=None)
    
