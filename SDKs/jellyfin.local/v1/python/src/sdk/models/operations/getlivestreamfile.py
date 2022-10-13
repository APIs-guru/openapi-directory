from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLiveStreamFilePathParams:
    container: str = field(default=None, metadata={'path_param': { 'field_name': 'container', 'style': 'simple', 'explode': False }})
    stream_id: str = field(default=None, metadata={'path_param': { 'field_name': 'streamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveStreamFileRequest:
    path_params: GetLiveStreamFilePathParams = field(default=None)
    

@dataclass
class GetLiveStreamFileResponse:
    content_type: str = field(default=None)
    get_live_stream_file_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
