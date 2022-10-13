from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetDeactivationReasonListPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeactivationReasonListRequest:
    path_params: GetDeactivationReasonListPathParams = field(default=None)
    

@dataclass
class GetDeactivationReasonListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    deactivation_reason_list_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
