from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest:
    path_params: GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams = field()
    

@dataclass
class GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
