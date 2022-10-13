from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAttachmentPathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    media_source_id: str = field(default=None, metadata={'path_param': { 'field_name': 'mediaSourceId', 'style': 'simple', 'explode': False }})
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttachmentRequest:
    path_params: GetAttachmentPathParams = field(default=None)
    

@dataclass
class GetAttachmentResponse:
    content_type: str = field(default=None)
    get_attachment_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
