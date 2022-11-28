from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceStaticRoutesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceStaticRoutesRequest:
    path_params: GetNetworkApplianceStaticRoutesPathParams = field()
    

@dataclass
class GetNetworkApplianceStaticRoutesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_static_routes_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
