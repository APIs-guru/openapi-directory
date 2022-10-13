from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchLinkAggregationPathParams:
    link_aggregation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'linkAggregationId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts:
    port_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portId' }})
    serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts:
    port_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portId' }})
    profile: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchLinkAggregationRequestBody:
    switch_ports: Optional[List[UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchPorts' }})
    switch_profile_ports: Optional[List[UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchProfilePorts' }})
    

@dataclass
class UpdateNetworkSwitchLinkAggregationRequest:
    path_params: UpdateNetworkSwitchLinkAggregationPathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchLinkAggregationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchLinkAggregationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_link_aggregation_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
