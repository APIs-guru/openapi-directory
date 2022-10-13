from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasImageAttachmentsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasImageAttachmentsPartialUpdateRequest:
    path_params: ExtrasImageAttachmentsPartialUpdatePathParams = field(default=None)
    request: shared.ImageAttachment = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasImageAttachmentsPartialUpdateResponse:
    content_type: str = field(default=None)
    image_attachment: Optional[shared.ImageAttachment] = field(default=None)
    status_code: int = field(default=None)
    
