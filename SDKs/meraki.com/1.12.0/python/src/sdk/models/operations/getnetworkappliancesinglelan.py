from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceSingleLanPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceSingleLanRequest:
    path_params: GetNetworkApplianceSingleLanPathParams = field()
    

@dataclass
class GetNetworkApplianceSingleLanResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_single_lan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
