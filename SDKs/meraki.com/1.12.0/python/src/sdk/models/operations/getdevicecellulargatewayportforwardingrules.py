from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCellularGatewayPortForwardingRulesPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCellularGatewayPortForwardingRulesRequest:
    path_params: GetDeviceCellularGatewayPortForwardingRulesPathParams = field()
    

@dataclass
class GetDeviceCellularGatewayPortForwardingRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_cellular_gateway_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
