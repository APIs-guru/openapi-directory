from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLiveStreamFilePathParams:
    container: str = field(metadata={'path_param': { 'field_name': 'container', 'style': 'simple', 'explode': False }})
    stream_id: str = field(metadata={'path_param': { 'field_name': 'streamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveStreamFileRequest:
    path_params: GetLiveStreamFilePathParams = field()
    

@dataclass
class GetLiveStreamFileResponse:
    content_type: str = field()
    status_code: int = field()
    get_live_stream_file_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
