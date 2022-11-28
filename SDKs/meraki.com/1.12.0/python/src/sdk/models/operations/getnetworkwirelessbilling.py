from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessBillingPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessBillingRequest:
    path_params: GetNetworkWirelessBillingPathParams = field()
    

@dataclass
class GetNetworkWirelessBillingResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_billing_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
