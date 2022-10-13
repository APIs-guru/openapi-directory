from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class GetOrthologsByListUsingPostRequest:
    request: shared.OrthologRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOrthologsByListUsingPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
