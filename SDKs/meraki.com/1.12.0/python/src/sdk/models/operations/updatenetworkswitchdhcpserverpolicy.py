from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchDhcpServerPolicyPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum(str, Enum):
    ALLOW = "allow"
    BLOCK = "block"


@dataclass_json
@dataclass
class UpdateNetworkSwitchDhcpServerPolicyRequestBody:
    allowed_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedServers') }})
    blocked_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedServers') }})
    default_policy: Optional[UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPolicy') }})
    

@dataclass
class UpdateNetworkSwitchDhcpServerPolicyRequest:
    path_params: UpdateNetworkSwitchDhcpServerPolicyPathParams = field()
    request: Optional[UpdateNetworkSwitchDhcpServerPolicyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchDhcpServerPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_dhcp_server_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
