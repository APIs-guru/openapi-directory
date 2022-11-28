from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadSubtitlePathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadSubtitleRequests:
    upload_subtitle_dto: Optional[shared.UploadSubtitleDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    upload_subtitle_dto1: Optional[shared.UploadSubtitleDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    upload_subtitle_dto2: Optional[shared.UploadSubtitleDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UploadSubtitleRequest:
    path_params: UploadSubtitlePathParams = field()
    request: UploadSubtitleRequests = field()
    

@dataclass
class UploadSubtitleResponse:
    content_type: str = field()
    status_code: int = field()
    
