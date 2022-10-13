from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkWirelessSsidIdentityPskPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkWirelessSsidIdentityPskRequestBody:
    group_policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passphrase' }})
    

@dataclass
class CreateNetworkWirelessSsidIdentityPskRequest:
    path_params: CreateNetworkWirelessSsidIdentityPskPathParams = field(default=None)
    request: CreateNetworkWirelessSsidIdentityPskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWirelessSsidIdentityPskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_wireless_ssid_identity_psk_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
