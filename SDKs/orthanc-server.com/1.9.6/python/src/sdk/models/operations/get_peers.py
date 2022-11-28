from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPeersQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPeersRequest:
    query_params: GetPeersQueryParams = field()
    

@dataclass
class GetPeersResponse:
    content_type: str = field()
    status_code: int = field()
    get_peers_200_application_json_any: Optional[Any] = field(default=None)
    
