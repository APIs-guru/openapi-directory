from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessRfProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rf_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rfProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessRfProfileRequest:
    path_params: GetNetworkWirelessRfProfilePathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessRfProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_rf_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
