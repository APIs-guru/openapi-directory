from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchLinkAggregationPathParams:
    link_aggregation_id: str = field(metadata={'path_param': { 'field_name': 'linkAggregationId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchLinkAggregationRequest:
    path_params: DeleteNetworkSwitchLinkAggregationPathParams = field()
    

@dataclass
class DeleteNetworkSwitchLinkAggregationResponse:
    content_type: str = field()
    status_code: int = field()
    
