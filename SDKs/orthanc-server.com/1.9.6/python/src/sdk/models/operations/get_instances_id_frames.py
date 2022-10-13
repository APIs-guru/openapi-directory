from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDFramesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesRequest:
    path_params: GetInstancesIDFramesPathParams = field(default=None)
    

@dataclass
class GetInstancesIDFramesResponse:
    content_type: str = field(default=None)
    get_instances_id_frames_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
