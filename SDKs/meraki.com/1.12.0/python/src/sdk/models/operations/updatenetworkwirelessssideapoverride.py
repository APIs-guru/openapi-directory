from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidEapOverridePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey:
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout_in_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMs' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity:
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retries' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBody:
    eapol_key: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eapolKey' }})
    identity: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetries' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequest:
    path_params: UpdateNetworkWirelessSsidEapOverridePathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidEapOverrideResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_eap_override_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
