from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutFirewallsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFirewallsIDUpdateFirewallRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources:
    server: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector:
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedToServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallAppliedTo:
    type: PutFirewallsIDFirewallResponseFirewallAppliedToTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    applied_to_resources: Optional[List[PutFirewallsIDFirewallResponseFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to_resources') }})
    label_selector: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PutFirewallsIDFirewallResponseFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    
class PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewallRule:
    direction: PutFirewallsIDFirewallResponseFirewallRuleDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: PutFirewallsIDFirewallResponseFirewallRuleProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponseFirewall:
    applied_to: List[PutFirewallsIDFirewallResponseFirewallAppliedTo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: List[PutFirewallsIDFirewallResponseFirewallRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class PutFirewallsIDFirewallResponse:
    firewall: PutFirewallsIDFirewallResponseFirewall = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    

@dataclass
class PutFirewallsIDRequest:
    path_params: PutFirewallsIDPathParams = field()
    request: Optional[PutFirewallsIDUpdateFirewallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFirewallsIDResponse:
    content_type: str = field()
    status_code: int = field()
    firewall_response: Optional[PutFirewallsIDFirewallResponse] = field(default=None)
    
