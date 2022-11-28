from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceFirewallFirewalledServicePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    service: str = field(metadata={'path_param': { 'field_name': 'service', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum(str, Enum):
    BLOCKED = "blocked"
    RESTRICTED = "restricted"
    UNRESTRICTED = "unrestricted"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody:
    access: UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    

@dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceRequest:
    path_params: UpdateNetworkApplianceFirewallFirewalledServicePathParams = field()
    request: UpdateNetworkApplianceFirewallFirewalledServiceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_firewall_firewalled_service_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
