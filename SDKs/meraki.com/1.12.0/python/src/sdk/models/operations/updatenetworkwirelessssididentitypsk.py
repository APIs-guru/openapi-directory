from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = field(metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidIdentityPskRequestBody:
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    

@dataclass
class UpdateNetworkWirelessSsidIdentityPskRequest:
    path_params: UpdateNetworkWirelessSsidIdentityPskPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidIdentityPskRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidIdentityPskResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_identity_psk_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
