from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkEventsEventTypesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkEventsEventTypesRequest:
    path_params: GetNetworkEventsEventTypesPathParams = field()
    

@dataclass
class GetNetworkEventsEventTypesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_events_event_types_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
