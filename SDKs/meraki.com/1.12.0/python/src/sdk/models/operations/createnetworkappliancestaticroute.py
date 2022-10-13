from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkApplianceStaticRoutePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkApplianceStaticRouteRequestBody:
    gateway_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayIp' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    subnet: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    

@dataclass
class CreateNetworkApplianceStaticRouteRequest:
    path_params: CreateNetworkApplianceStaticRoutePathParams = field(default=None)
    request: CreateNetworkApplianceStaticRouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkApplianceStaticRouteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_appliance_static_route_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
