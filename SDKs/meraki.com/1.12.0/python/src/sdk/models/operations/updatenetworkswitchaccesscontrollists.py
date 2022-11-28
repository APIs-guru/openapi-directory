from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchAccessControlListsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    dst_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstCidr') }})
    policy: UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    src_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcCidr') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dst_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    ip_version: Optional[UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipVersion') }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    vlan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAccessControlListsRequestBody:
    rules: List[UpdateNetworkSwitchAccessControlListsRequestBodyRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkSwitchAccessControlListsRequest:
    path_params: UpdateNetworkSwitchAccessControlListsPathParams = field()
    request: UpdateNetworkSwitchAccessControlListsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchAccessControlListsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_access_control_lists_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
