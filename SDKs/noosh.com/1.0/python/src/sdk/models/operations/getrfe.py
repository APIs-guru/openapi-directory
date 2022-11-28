from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRfePathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    rfe_id: str = field(metadata={'path_param': { 'field_name': 'rfe_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRfeRequest:
    path_params: GetRfePathParams = field()
    

@dataclass
class GetRfeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    rfe_expand_vo: Optional[Any] = field(default=None)
    
