from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchLinkAggregationsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchLinkAggregationsRequest:
    path_params: GetNetworkSwitchLinkAggregationsPathParams = field()
    

@dataclass
class GetNetworkSwitchLinkAggregationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_link_aggregations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
