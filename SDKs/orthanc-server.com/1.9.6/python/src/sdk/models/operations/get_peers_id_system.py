from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPeersIDSystemPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPeersIDSystemRequest:
    path_params: GetPeersIDSystemPathParams = field(default=None)
    

@dataclass
class GetPeersIDSystemResponse:
    content_type: str = field(default=None)
    get_peers_id_system_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
