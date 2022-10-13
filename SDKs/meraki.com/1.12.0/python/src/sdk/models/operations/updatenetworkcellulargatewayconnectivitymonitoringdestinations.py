from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations:
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody:
    destinations: Optional[List[UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    

@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest:
    path_params: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams = field(default=None)
    request: Optional[UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
