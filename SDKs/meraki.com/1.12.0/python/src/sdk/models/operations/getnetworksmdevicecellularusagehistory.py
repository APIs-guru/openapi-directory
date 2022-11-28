from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmDeviceCellularUsageHistoryPathParams:
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmDeviceCellularUsageHistoryRequest:
    path_params: GetNetworkSmDeviceCellularUsageHistoryPathParams = field()
    

@dataclass
class GetNetworkSmDeviceCellularUsageHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_device_cellular_usage_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
