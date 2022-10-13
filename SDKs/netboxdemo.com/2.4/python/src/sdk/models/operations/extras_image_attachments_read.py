from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasImageAttachmentsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasImageAttachmentsReadRequest:
    path_params: ExtrasImageAttachmentsReadPathParams = field(default=None)
    

@dataclass
class ExtrasImageAttachmentsReadResponse:
    content_type: str = field(default=None)
    image_attachment: Optional[shared.ImageAttachment] = field(default=None)
    status_code: int = field(default=None)
    
