from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRfePathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    rfe_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rfe_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRfeRequest:
    path_params: GetRfePathParams = field(default=None)
    

@dataclass
class GetRfeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    rfe_expand_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
