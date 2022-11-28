from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceStaticRoutePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges:
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceStaticRouteRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    fixed_ip_assignments: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedIpAssignments') }})
    gateway_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayIp') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reserved_ip_ranges: Optional[List[UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRanges') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclass
class UpdateNetworkApplianceStaticRouteRequest:
    path_params: UpdateNetworkApplianceStaticRoutePathParams = field()
    request: Optional[UpdateNetworkApplianceStaticRouteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_static_route_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
