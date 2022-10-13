from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDFramesFramePathParams:
    frame: str = field(default=None, metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRequest:
    path_params: GetInstancesIDFramesFramePathParams = field(default=None)
    

@dataclass
class GetInstancesIDFramesFrameResponse:
    content_type: str = field(default=None)
    get_instances_id_frames_frame_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
