from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules:
    access: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIps' }})
    lan_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lanIp' }})
    local_port: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPort' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    public_port: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicPort' }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody:
    rules: Optional[List[UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequest:
    path_params: UpdateDeviceCellularGatewayPortForwardingRulesPathParams = field(default=None)
    request: Optional[UpdateDeviceCellularGatewayPortForwardingRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_cellular_gateway_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
