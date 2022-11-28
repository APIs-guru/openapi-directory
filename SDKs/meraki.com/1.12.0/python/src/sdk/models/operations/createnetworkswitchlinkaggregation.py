from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchLinkAggregationPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts:
    port_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portId') }})
    serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts:
    port_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portId') }})
    profile: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchLinkAggregationRequestBody:
    switch_ports: Optional[List[CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchPorts') }})
    switch_profile_ports: Optional[List[CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfilePorts') }})
    

@dataclass
class CreateNetworkSwitchLinkAggregationRequest:
    path_params: CreateNetworkSwitchLinkAggregationPathParams = field()
    request: Optional[CreateNetworkSwitchLinkAggregationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchLinkAggregationResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_link_aggregation_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
