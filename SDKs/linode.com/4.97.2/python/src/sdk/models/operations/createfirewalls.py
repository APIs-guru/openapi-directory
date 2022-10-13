from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
CREATE_FIREWALLS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass_json
@dataclass
class CreateFirewallsRequestBodyDevices:
    linodes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linodes' }})
    
class CreateFirewallsRequestBodyRulesInboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"

class CreateFirewallsRequestBodyRulesOutboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class CreateFirewallsRequestBodyRules:
    inbound: Optional[List[shared.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound' }})
    inbound_policy: Optional[CreateFirewallsRequestBodyRulesInboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_policy' }})
    outbound: Optional[List[shared.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound' }})
    outbound_policy: Optional[CreateFirewallsRequestBodyRulesOutboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_policy' }})
    
class CreateFirewallsRequestBodyStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    DELETED = "deleted"


@dataclass_json
@dataclass
class CreateFirewallsRequestBody:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    devices: Optional[CreateFirewallsRequestBodyDevices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    rules: CreateFirewallsRequestBodyRules = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    status: Optional[CreateFirewallsRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class CreateFirewallsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateFirewallsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFirewallsSecurity:
    option1: Optional[CreateFirewallsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateFirewallsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateFirewallsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateFirewallsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFirewallsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateFirewallsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateFirewallsResponse:
    content_type: str = field(default=None)
    firewall: Optional[shared.Firewall] = field(default=None)
    status_code: int = field(default=None)
    create_firewalls_default_application_json_object: Optional[CreateFirewallsDefaultApplicationJSON] = field(default=None)
    
