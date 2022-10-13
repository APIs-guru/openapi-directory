from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SwapNetworkApplianceWarmSparePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SwapNetworkApplianceWarmSpareRequest:
    path_params: SwapNetworkApplianceWarmSparePathParams = field(default=None)
    

@dataclass
class SwapNetworkApplianceWarmSpareResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    swap_network_appliance_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
