from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations:
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody:
    destinations: Optional[List[UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    

@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest:
    path_params: UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams = field()
    request: Optional[UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_connectivity_monitoring_destinations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
