from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkApplianceStaticRoutePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkApplianceStaticRouteRequestBody:
    gateway_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayIp') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subnet: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclass
class CreateNetworkApplianceStaticRouteRequest:
    path_params: CreateNetworkApplianceStaticRoutePathParams = field()
    request: CreateNetworkApplianceStaticRouteRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkApplianceStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_appliance_static_route_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
