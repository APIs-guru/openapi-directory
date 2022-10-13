from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStpPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStpRequest:
    path_params: GetNetworkSwitchStpPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchStpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_stp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
