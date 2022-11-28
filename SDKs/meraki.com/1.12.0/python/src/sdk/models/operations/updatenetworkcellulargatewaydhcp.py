from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkCellularGatewayDhcpPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewayDhcpRequestBody:
    dhcp_lease_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpLeaseTime') }})
    dns_custom_nameservers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsCustomNameservers') }})
    dns_nameservers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsNameservers') }})
    

@dataclass
class UpdateNetworkCellularGatewayDhcpRequest:
    path_params: UpdateNetworkCellularGatewayDhcpPathParams = field()
    request: Optional[UpdateNetworkCellularGatewayDhcpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCellularGatewayDhcpResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_cellular_gateway_dhcp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
