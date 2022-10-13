from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationAdaptivePolicyACLPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum(str, Enum):
    ANY = "any"
    IPV4 = "ipv4"
    IPV6 = "ipv6"

class UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateOrganizationAdaptivePolicyACLRequestBodyRules:
    dst_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dstPort' }})
    policy: UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'srcPort' }})
    

@dataclass_json
@dataclass
class UpdateOrganizationAdaptivePolicyACLRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ip_version: Optional[UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: Optional[List[UpdateOrganizationAdaptivePolicyACLRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateOrganizationAdaptivePolicyACLRequest:
    path_params: UpdateOrganizationAdaptivePolicyACLPathParams = field(default=None)
    request: Optional[UpdateOrganizationAdaptivePolicyACLRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationAdaptivePolicyACLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
