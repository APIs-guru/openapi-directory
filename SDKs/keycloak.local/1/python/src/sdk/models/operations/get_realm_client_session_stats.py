from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmClientSessionStatsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientSessionStatsRequest:
    path_params: GetRealmClientSessionStatsPathParams = field(default=None)
    

@dataclass
class GetRealmClientSessionStatsResponse:
    content_type: str = field(default=None)
    get_realm_client_session_stats_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
