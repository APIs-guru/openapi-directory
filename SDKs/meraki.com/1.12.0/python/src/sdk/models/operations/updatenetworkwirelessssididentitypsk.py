from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = field(default=None, metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidIdentityPskRequestBody:
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passphrase' }})
    

@dataclass
class UpdateNetworkWirelessSsidIdentityPskRequest:
    path_params: UpdateNetworkWirelessSsidIdentityPskPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidIdentityPskRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidIdentityPskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_identity_psk_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
