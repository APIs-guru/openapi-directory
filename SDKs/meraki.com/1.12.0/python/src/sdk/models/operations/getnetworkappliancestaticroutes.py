from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceStaticRoutesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceStaticRoutesRequest:
    path_params: GetNetworkApplianceStaticRoutesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceStaticRoutesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_static_routes_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
