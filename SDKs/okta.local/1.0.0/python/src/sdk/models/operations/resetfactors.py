from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResetFactorsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetFactorsRequest:
    path_params: ResetFactorsPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class ResetFactorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
