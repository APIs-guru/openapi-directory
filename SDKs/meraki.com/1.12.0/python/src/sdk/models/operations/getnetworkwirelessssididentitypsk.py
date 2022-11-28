from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = field(metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidIdentityPskRequest:
    path_params: GetNetworkWirelessSsidIdentityPskPathParams = field()
    

@dataclass
class GetNetworkWirelessSsidIdentityPskResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_ssid_identity_psk_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
