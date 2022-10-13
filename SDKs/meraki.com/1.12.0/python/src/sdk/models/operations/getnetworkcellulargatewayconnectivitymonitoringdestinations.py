from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest:
    path_params: GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams = field(default=None)
    

@dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
