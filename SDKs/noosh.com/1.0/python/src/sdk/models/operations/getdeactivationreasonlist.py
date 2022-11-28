from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeactivationReasonListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeactivationReasonListRequest:
    path_params: GetDeactivationReasonListPathParams = field()
    

@dataclass
class GetDeactivationReasonListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    deactivation_reason_list_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    
