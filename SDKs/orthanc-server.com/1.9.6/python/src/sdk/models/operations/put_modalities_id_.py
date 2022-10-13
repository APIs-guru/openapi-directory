from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutModalitiesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutModalitiesIDRequest:
    path_params: PutModalitiesIDPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutModalitiesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
