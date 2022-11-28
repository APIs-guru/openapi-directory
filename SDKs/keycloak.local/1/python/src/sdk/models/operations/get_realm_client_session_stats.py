from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmClientSessionStatsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientSessionStatsRequest:
    path_params: GetRealmClientSessionStatsPathParams = field()
    

@dataclass
class GetRealmClientSessionStatsResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_client_session_stats_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
