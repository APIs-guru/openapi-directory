from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDFramesFramePathParams:
    frame: str = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRequest:
    path_params: GetInstancesIDFramesFramePathParams = field()
    

@dataclass
class GetInstancesIDFramesFrameResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_frames_frame_200_application_json_any: Optional[Any] = field(default=None)
    
