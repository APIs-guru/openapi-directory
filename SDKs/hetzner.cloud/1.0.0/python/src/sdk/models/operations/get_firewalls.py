from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    

@dataclass
class GetFirewallsRequest:
    query_params: GetFirewallsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesTypeEnum(str, Enum):
    SERVER = "server"


@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResources:
    server: Optional[GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: Optional[GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResourcesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsAppliedToLabelSelector:
    selector: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsAppliedToServer:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnum(str, Enum):
    SERVER = "server"
    LABEL_SELECTOR = "label_selector"


@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsAppliedTo:
    applied_to_resources: Optional[List[GetFirewalls200ApplicationJSONFirewallsAppliedToAppliedToResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to_resources' }})
    label_selector: Optional[GetFirewalls200ApplicationJSONFirewallsAppliedToLabelSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_selector' }})
    server: Optional[GetFirewalls200ApplicationJSONFirewallsAppliedToServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    type: GetFirewalls200ApplicationJSONFirewallsAppliedToTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsRulesRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_ips' }})
    direction: GetFirewalls200ApplicationJSONFirewallsRulesDirectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: GetFirewalls200ApplicationJSONFirewallsRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ips' }})
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsFirewall:
    applied_to: List[GetFirewalls200ApplicationJSONFirewallsAppliedTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_to' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: List[GetFirewalls200ApplicationJSONFirewallsRulesRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONMeta:
    pagination: GetFirewalls200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSONFirewallsResponse:
    firewalls: List[GetFirewalls200ApplicationJSONFirewallsFirewall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
    meta: Optional[GetFirewalls200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetFirewallsResponse:
    content_type: str = field(default=None)
    firewalls_response: Optional[GetFirewalls200ApplicationJSONFirewallsResponse] = field(default=None)
    status_code: int = field(default=None)
    
