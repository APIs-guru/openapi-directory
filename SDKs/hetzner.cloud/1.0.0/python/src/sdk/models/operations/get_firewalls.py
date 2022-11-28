from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetFirewallsSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"


@dataclass
class GetFirewallsQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetFirewallsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources:
    server: Optional[GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: Optional[GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector:
    selector: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseFirewallAppliedToServer:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseFirewallAppliedTo:
    type: GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    applied_to_resources: Optional[List[GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to_resources') }})
    label_selector: Optional[GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_selector') }})
    server: Optional[GetFirewallsFirewallsResponseFirewallAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    
class GetFirewallsFirewallsResponseFirewallRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class GetFirewallsFirewallsResponseFirewallRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseFirewallRule:
    direction: GetFirewallsFirewallsResponseFirewallRuleDirectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseFirewall:
    applied_to: List[GetFirewallsFirewallsResponseFirewallAppliedTo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: List[GetFirewallsFirewallsResponseFirewallRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetFirewallsFirewallsResponseMeta:
    pagination: GetFirewallsFirewallsResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetFirewallsFirewallsResponse:
    firewalls: List[GetFirewallsFirewallsResponseFirewall] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    meta: Optional[GetFirewallsFirewallsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetFirewallsRequest:
    query_params: GetFirewallsQueryParams = field()
    

@dataclass
class GetFirewallsResponse:
    content_type: str = field()
    status_code: int = field()
    firewalls_response: Optional[GetFirewallsFirewallsResponse] = field(default=None)
    
