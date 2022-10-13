from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceVlanPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    vlan_id: str = field(default=None, metadata={'path_param': { 'field_name': 'vlanId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum(str, Enum):
    RUN_A_DHCP_SERVER = "Run a DHCP server"
    RELAY_DHCP_TO_ANOTHER_SERVER = "Relay DHCP to another server"
    DO_NOT_RESPOND_TO_DHCP_REQUESTS = "Do not respond to DHCP requests"

class UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum(str, Enum):
    THIRTY_MINUTES = "30 minutes"
    ONE_HOUR = "1 hour"
    FOUR_HOURS = "4 hours"
    TWELVE_HOURS = "12 hours"
    ONE_DAY = "1 day"
    ONE_WEEK = "1 week"

class UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum(str, Enum):
    TEXT = "text"
    IP = "ip"
    HEX = "hex"
    INTEGER = "integer"


@dataclass_json
@dataclass
class UpdateNetworkApplianceVlanRequestBodyDhcpOptions:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    type: UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVlanRequestBodyReservedIPRanges:
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVlanRequestBody:
    appliance_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applianceIp' }})
    dhcp_boot_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpBootFilename' }})
    dhcp_boot_next_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpBootNextServer' }})
    dhcp_boot_options_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpBootOptionsEnabled' }})
    dhcp_handling: Optional[UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpHandling' }})
    dhcp_lease_time: Optional[UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpLeaseTime' }})
    dhcp_options: Optional[List[UpdateNetworkApplianceVlanRequestBodyDhcpOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpOptions' }})
    dhcp_relay_server_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpRelayServerIps' }})
    dns_nameservers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsNameservers' }})
    fixed_ip_assignments: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedIpAssignments' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reserved_ip_ranges: Optional[List[UpdateNetworkApplianceVlanRequestBodyReservedIPRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedIpRanges' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    vpn_nat_subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpnNatSubnet' }})
    

@dataclass
class UpdateNetworkApplianceVlanRequest:
    path_params: UpdateNetworkApplianceVlanPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceVlanRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceVlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_vlan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
