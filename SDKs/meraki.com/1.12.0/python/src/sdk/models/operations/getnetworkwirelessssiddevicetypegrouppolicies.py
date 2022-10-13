from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest:
    path_params: GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_ssid_device_type_group_policies_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
