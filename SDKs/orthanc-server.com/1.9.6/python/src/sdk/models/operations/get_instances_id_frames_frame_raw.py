from dataclasses import dataclass, field



@dataclass
class GetInstancesIDFramesFrameRawPathParams:
    frame: float = field(default=None, metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRawRequest:
    path_params: GetInstancesIDFramesFrameRawPathParams = field(default=None)
    

@dataclass
class GetInstancesIDFramesFrameRawResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
