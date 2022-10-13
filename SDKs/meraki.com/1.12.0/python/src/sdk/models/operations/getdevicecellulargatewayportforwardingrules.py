from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCellularGatewayPortForwardingRulesPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCellularGatewayPortForwardingRulesRequest:
    path_params: GetDeviceCellularGatewayPortForwardingRulesPathParams = field(default=None)
    

@dataclass
class GetDeviceCellularGatewayPortForwardingRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_cellular_gateway_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
