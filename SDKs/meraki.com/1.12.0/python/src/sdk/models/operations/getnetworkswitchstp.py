from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStpPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStpRequest:
    path_params: GetNetworkSwitchStpPathParams = field()
    

@dataclass
class GetNetworkSwitchStpResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_stp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
