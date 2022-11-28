from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLiveRecordingFilePathParams:
    recording_id: str = field(metadata={'path_param': { 'field_name': 'recordingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveRecordingFileRequest:
    path_params: GetLiveRecordingFilePathParams = field()
    

@dataclass
class GetLiveRecordingFileResponse:
    content_type: str = field()
    status_code: int = field()
    get_live_recording_file_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
