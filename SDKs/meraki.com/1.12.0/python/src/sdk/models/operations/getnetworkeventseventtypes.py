from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkEventsEventTypesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkEventsEventTypesRequest:
    path_params: GetNetworkEventsEventTypesPathParams = field(default=None)
    

@dataclass
class GetNetworkEventsEventTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_events_event_types_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
