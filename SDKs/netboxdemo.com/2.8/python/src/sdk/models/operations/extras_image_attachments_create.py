from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasImageAttachmentsCreateRequest:
    request: shared.ImageAttachment = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasImageAttachmentsCreateResponse:
    content_type: str = field(default=None)
    image_attachment: Optional[shared.ImageAttachment] = field(default=None)
    status_code: int = field(default=None)
    
