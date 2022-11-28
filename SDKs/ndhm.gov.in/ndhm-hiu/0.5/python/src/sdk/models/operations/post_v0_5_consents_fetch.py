from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05ConsentsFetchHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentsFetchRequest:
    headers: PostV05ConsentsFetchHeaders = field()
    request: shared.ConsentFetchRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsFetchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
