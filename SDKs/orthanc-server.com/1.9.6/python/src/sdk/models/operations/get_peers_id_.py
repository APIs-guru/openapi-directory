from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPeersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPeersIDRequest:
    path_params: GetPeersIDPathParams = field()
    

@dataclass
class GetPeersIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_peers_id_200_application_json_any: Optional[Any] = field(default=None)
    
