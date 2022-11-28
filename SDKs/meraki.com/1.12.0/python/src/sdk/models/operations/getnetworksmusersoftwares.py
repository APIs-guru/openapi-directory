from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmUserSoftwaresPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmUserSoftwaresRequest:
    path_params: GetNetworkSmUserSoftwaresPathParams = field()
    

@dataclass
class GetNetworkSmUserSoftwaresResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_user_softwares_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
