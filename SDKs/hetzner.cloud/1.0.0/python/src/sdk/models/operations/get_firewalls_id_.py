from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetFirewallsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources:
    server: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToLabelSelector:
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedToServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponseFirewallAppliedTo:
    type: GetFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    applied_to_resources: Optional[List[GetFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to_resources') }})
    label_selector: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[GetFirewallsIDFirewallResponseFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    
class GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponseFirewallRule:
    direction: GetFirewallsIDFirewallResponseFirewallRuleDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: GetFirewallsIDFirewallResponseFirewallRuleProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponseFirewall:
    applied_to: List[GetFirewallsIDFirewallResponseFirewallAppliedTo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: List[GetFirewallsIDFirewallResponseFirewallRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class GetFirewallsIDFirewallResponse:
    firewall: GetFirewallsIDFirewallResponseFirewall = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    

@dataclass
class GetFirewallsIDRequest:
    path_params: GetFirewallsIDPathParams = field()
    

@dataclass
class GetFirewallsIDResponse:
    content_type: str = field()
    status_code: int = field()
    firewall_response: Optional[GetFirewallsIDFirewallResponse] = field(default=None)
    
