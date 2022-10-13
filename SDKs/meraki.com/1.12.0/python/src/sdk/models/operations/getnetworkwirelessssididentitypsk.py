from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = field(default=None, metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidIdentityPskRequest:
    path_params: GetNetworkWirelessSsidIdentityPskPathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessSsidIdentityPskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_ssid_identity_psk_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
