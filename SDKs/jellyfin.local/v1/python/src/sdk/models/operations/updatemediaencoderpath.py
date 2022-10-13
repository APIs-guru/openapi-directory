from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateMediaEncoderPathRequests:
    media_encoder_path_dto: Optional[shared.MediaEncoderPathDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    media_encoder_path_dto1: Optional[shared.MediaEncoderPathDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    media_encoder_path_dto2: Optional[shared.MediaEncoderPathDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateMediaEncoderPathSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateMediaEncoderPathRequest:
    request: UpdateMediaEncoderPathRequests = field(default=None)
    security: UpdateMediaEncoderPathSecurity = field(default=None)
    

@dataclass
class UpdateMediaEncoderPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
