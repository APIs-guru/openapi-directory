from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchLinkAggregationsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchLinkAggregationsRequest:
    path_params: GetNetworkSwitchLinkAggregationsPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchLinkAggregationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_link_aggregations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
