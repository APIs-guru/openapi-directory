from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations:
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody:
    destinations: Optional[List[UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    

@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest:
    path_params: UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
