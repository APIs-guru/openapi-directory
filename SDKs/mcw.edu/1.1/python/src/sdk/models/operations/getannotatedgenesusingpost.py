from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnnotatedGenesUsingPostRequest:
    request: Optional[shared.AnnotatedGeneRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAnnotatedGenesUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
