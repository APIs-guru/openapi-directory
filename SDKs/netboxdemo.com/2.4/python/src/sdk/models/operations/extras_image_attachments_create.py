from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasImageAttachmentsCreateRequest:
    request: shared.ImageAttachmentInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasImageAttachmentsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    image_attachment: Optional[shared.ImageAttachment] = field(default=None)
    
