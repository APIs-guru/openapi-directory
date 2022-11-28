from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations:
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody:
    destinations: Optional[List[UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    

@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest:
    path_params: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams = field()
    request: Optional[UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
