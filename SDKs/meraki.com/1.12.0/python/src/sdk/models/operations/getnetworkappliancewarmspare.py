from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceWarmSparePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceWarmSpareRequest:
    path_params: GetNetworkApplianceWarmSparePathParams = field()
    

@dataclass
class GetNetworkApplianceWarmSpareResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
