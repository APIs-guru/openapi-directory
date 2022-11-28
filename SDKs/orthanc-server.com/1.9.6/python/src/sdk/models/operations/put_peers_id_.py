from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutPeersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPeersIDRequest:
    path_params: PutPeersIDPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPeersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
