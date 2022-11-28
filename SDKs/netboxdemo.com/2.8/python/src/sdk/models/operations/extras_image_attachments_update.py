from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasImageAttachmentsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasImageAttachmentsUpdateRequest:
    path_params: ExtrasImageAttachmentsUpdatePathParams = field()
    request: shared.ImageAttachmentInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasImageAttachmentsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    image_attachment: Optional[shared.ImageAttachment] = field(default=None)
    
