from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationAdaptivePolicyACLPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
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
    dst_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dstPort' }})
    policy: CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPort' }})
    

@dataclass_json
@dataclass
class CreateOrganizationAdaptivePolicyACLRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ip_version: CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipVersion' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: List[CreateOrganizationAdaptivePolicyACLRequestBodyRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class CreateOrganizationAdaptivePolicyACLRequest:
    path_params: CreateOrganizationAdaptivePolicyACLPathParams = field(default=None)
    request: CreateOrganizationAdaptivePolicyACLRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationAdaptivePolicyACLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
