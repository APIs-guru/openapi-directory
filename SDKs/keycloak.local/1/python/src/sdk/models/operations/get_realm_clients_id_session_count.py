from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmClientsIDSessionCountPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDSessionCountRequest:
    path_params: GetRealmClientsIDSessionCountPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDSessionCountResponse:
    content_type: str = field(default=None)
    get_realm_clients_id_session_count_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
