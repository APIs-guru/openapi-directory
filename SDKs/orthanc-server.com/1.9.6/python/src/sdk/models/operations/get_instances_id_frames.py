from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDFramesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesRequest:
    path_params: GetInstancesIDFramesPathParams = field()
    

@dataclass
class GetInstancesIDFramesResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_frames_200_application_json_any: Optional[Any] = field(default=None)
    
