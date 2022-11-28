from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationAdaptivePolicyACLPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum(str, Enum):
    ANY = "any"
    IPV4 = "ipv4"
    IPV6 = "ipv6"

class CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class CreateOrganizationAdaptivePolicyACLRequestBodyRules:
    policy: CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    dst_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    

@dataclass_json
@dataclass
class CreateOrganizationAdaptivePolicyACLRequestBody:
    ip_version: CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipVersion') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: List[CreateOrganizationAdaptivePolicyACLRequestBodyRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class CreateOrganizationAdaptivePolicyACLRequest:
    path_params: CreateOrganizationAdaptivePolicyACLPathParams = field()
    request: CreateOrganizationAdaptivePolicyACLRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationAdaptivePolicyACLResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
