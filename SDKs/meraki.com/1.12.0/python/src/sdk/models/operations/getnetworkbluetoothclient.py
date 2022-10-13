from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkBluetoothClientPathParams:
    bluetooth_client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'bluetoothClientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkBluetoothClientQueryParams:
    connectivity_history_timespan: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'connectivityHistoryTimespan', 'style': 'form', 'explode': True }})
    include_connectivity_history: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeConnectivityHistory', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetworkBluetoothClientRequest:
    path_params: GetNetworkBluetoothClientPathParams = field(default=None)
    query_params: GetNetworkBluetoothClientQueryParams = field(default=None)
    

@dataclass
class GetNetworkBluetoothClientResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_bluetooth_client_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
