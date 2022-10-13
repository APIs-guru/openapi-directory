from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessBillingPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessBillingRequest:
    path_params: GetNetworkWirelessBillingPathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessBillingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_billing_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
