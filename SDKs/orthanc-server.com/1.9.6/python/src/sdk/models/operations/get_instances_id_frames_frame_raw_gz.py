from dataclasses import dataclass, field



@dataclass
class GetInstancesIDFramesFrameRawGzPathParams:
    frame: float = field(default=None, metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRawGzRequest:
    path_params: GetInstancesIDFramesFrameRawGzPathParams = field(default=None)
    

@dataclass
class GetInstancesIDFramesFrameRawGzResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
