from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchAccessControlListsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum(str, Enum):
    ANY = "any"
    IPV4 = "ipv4"
    IPV6 = "ipv6"

class UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessControlListsRequestBodyRules:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    dst_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dstCidr' }})
    dst_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dstPort' }})
    ip_version: Optional[UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipVersion' }})
    policy: UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    src_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcCidr' }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPort' }})
    vlan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessControlListsRequestBody:
    rules: List[UpdateNetworkSwitchAccessControlListsRequestBodyRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkSwitchAccessControlListsRequest:
    path_params: UpdateNetworkSwitchAccessControlListsPathParams = field(default=None)
    request: UpdateNetworkSwitchAccessControlListsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchAccessControlListsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_access_control_lists_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
