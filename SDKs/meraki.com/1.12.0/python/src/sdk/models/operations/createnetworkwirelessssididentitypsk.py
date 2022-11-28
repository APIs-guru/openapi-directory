from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkWirelessSsidIdentityPskPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkWirelessSsidIdentityPskRequestBody:
    group_policy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    

@dataclass
class CreateNetworkWirelessSsidIdentityPskRequest:
    path_params: CreateNetworkWirelessSsidIdentityPskPathParams = field()
    request: CreateNetworkWirelessSsidIdentityPskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWirelessSsidIdentityPskResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_wireless_ssid_identity_psk_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
