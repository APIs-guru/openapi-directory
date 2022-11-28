from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationAdaptivePolicyACLPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
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
    policy: UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    dst_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dstPort') }})
    src_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPort') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationAdaptivePolicyACLRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ip_version: Optional[UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: Optional[List[UpdateOrganizationAdaptivePolicyACLRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateOrganizationAdaptivePolicyACLRequest:
    path_params: UpdateOrganizationAdaptivePolicyACLPathParams = field()
    request: Optional[UpdateOrganizationAdaptivePolicyACLRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationAdaptivePolicyACLResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
