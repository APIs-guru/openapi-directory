from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAssignedAppLinksPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssignedAppLinksRequest:
    path_params: GetAssignedAppLinksPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class GetAssignedAppLinksResponse:
    content_type: str = field()
    status_code: int = field()
    
