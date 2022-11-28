from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostFirewallsCreateFirewallRequestApplyToLabelSelector:
    r"""PostFirewallsCreateFirewallRequestApplyToLabelSelector
    Configuration for type LabelSelector, required if type is `label_selector`
    """
    
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallRequestApplyToServer:
    r"""PostFirewallsCreateFirewallRequestApplyToServer
    Configuration for type Server, required if type is `server`
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostFirewallsCreateFirewallRequestApplyToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsCreateFirewallRequestApplyTo:
    type: PostFirewallsCreateFirewallRequestApplyToTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    label_selector: Optional[PostFirewallsCreateFirewallRequestApplyToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostFirewallsCreateFirewallRequestApplyToServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    
class PostFirewallsCreateFirewallRequestRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PostFirewallsCreateFirewallRequestRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PostFirewallsCreateFirewallRequestRule:
    direction: PostFirewallsCreateFirewallRequestRuleDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: PostFirewallsCreateFirewallRequestRuleProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    apply_to: Optional[List[PostFirewallsCreateFirewallRequestApplyTo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apply_to') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    rules: Optional[List[PostFirewallsCreateFirewallRequestRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseActionError:
    r"""PostFirewallsCreateFirewallResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFirewallsCreateFirewallResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFirewallsCreateFirewallResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostFirewallsCreateFirewallResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFirewallsCreateFirewallResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources:
    server: Optional[PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector:
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseFirewallAppliedToServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseFirewallAppliedTo:
    type: PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    applied_to_resources: Optional[List[PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to_resources') }})
    label_selector: Optional[PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[PostFirewallsCreateFirewallResponseFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    
class PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseFirewallRule:
    direction: PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponseFirewall:
    applied_to: List[PostFirewallsCreateFirewallResponseFirewallAppliedTo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: List[PostFirewallsCreateFirewallResponseFirewallRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class PostFirewallsCreateFirewallResponse:
    actions: Optional[List[PostFirewallsCreateFirewallResponseAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    firewall: Optional[PostFirewallsCreateFirewallResponseFirewall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    

@dataclass
class PostFirewallsRequest:
    request: Optional[PostFirewallsCreateFirewallRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFirewallsResponse:
    content_type: str = field()
    status_code: int = field()
    create_firewall_response: Optional[PostFirewallsCreateFirewallResponse] = field(default=None)
    
