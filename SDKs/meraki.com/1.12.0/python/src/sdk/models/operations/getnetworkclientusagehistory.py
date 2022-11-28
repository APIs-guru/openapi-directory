from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkClientUsageHistoryPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkClientUsageHistoryRequest:
    path_params: GetNetworkClientUsageHistoryPathParams = field()
    

@dataclass
class GetNetworkClientUsageHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_client_usage_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
