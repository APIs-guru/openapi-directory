from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceFirewallFirewalledServicePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    service: str = field(default=None, metadata={'path_param': { 'field_name': 'service', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum(str, Enum):
    BLOCKED = "blocked"
    RESTRICTED = "restricted"
    UNRESTRICTED = "unrestricted"


@dataclass_json
@dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody:
    access: UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIps' }})
    

@dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceRequest:
    path_params: UpdateNetworkApplianceFirewallFirewalledServicePathParams = field(default=None)
    request: UpdateNetworkApplianceFirewallFirewalledServiceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_firewall_firewalled_service_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
