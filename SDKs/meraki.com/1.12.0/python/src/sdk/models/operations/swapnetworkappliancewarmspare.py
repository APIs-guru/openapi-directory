from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SwapNetworkApplianceWarmSparePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SwapNetworkApplianceWarmSpareRequest:
    path_params: SwapNetworkApplianceWarmSparePathParams = field()
    

@dataclass
class SwapNetworkApplianceWarmSpareResponse:
    content_type: str = field()
    status_code: int = field()
    swap_network_appliance_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
