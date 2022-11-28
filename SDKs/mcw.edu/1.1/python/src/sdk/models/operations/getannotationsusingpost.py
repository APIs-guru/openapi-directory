from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnnotationsUsingPostRequest:
    request: Optional[shared.AnnotationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAnnotationsUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
