from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules:
    access: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    lan_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIp') }})
    local_port: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPort') }})
    protocol: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    public_port: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPort') }})
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody:
    rules: Optional[List[UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequest:
    path_params: UpdateDeviceCellularGatewayPortForwardingRulesPathParams = field()
    request: Optional[UpdateDeviceCellularGatewayPortForwardingRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_cellular_gateway_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
