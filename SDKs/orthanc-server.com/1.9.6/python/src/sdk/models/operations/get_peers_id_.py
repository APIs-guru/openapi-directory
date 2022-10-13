from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPeersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPeersIDRequest:
    path_params: GetPeersIDPathParams = field(default=None)
    

@dataclass
class GetPeersIDResponse:
    content_type: str = field(default=None)
    get_peers_id_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
