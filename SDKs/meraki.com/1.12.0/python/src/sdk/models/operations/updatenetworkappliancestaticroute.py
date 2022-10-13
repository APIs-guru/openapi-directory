from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceStaticRoutePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(default=None, metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges:
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceStaticRouteRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    fixed_ip_assignments: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedIpAssignments' }})
    gateway_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayIp' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reserved_ip_ranges: Optional[List[UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedIpRanges' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    

@dataclass
class UpdateNetworkApplianceStaticRouteRequest:
    path_params: UpdateNetworkApplianceStaticRoutePathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceStaticRouteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceStaticRouteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_static_route_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
