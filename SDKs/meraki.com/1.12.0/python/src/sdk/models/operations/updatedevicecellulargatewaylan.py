from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceCellularGatewayLanPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    mac: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges:
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayLanRequestBody:
    fixed_ip_assignments: Optional[List[UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedIpAssignments' }})
    reserved_ip_ranges: Optional[List[UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedIpRanges' }})
    

@dataclass
class UpdateDeviceCellularGatewayLanRequest:
    path_params: UpdateDeviceCellularGatewayLanPathParams = field(default=None)
    request: Optional[UpdateDeviceCellularGatewayLanRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCellularGatewayLanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_cellular_gateway_lan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
