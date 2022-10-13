from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLiveRecordingFilePathParams:
    recording_id: str = field(default=None, metadata={'path_param': { 'field_name': 'recordingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveRecordingFileRequest:
    path_params: GetLiveRecordingFilePathParams = field(default=None)
    

@dataclass
class GetLiveRecordingFileResponse:
    content_type: str = field(default=None)
    get_live_recording_file_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
