from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkFloorPlanPathParams:
    floor_plan_id: str = field(metadata={'path_param': { 'field_name': 'floorPlanId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkFloorPlanRequest:
    path_params: GetNetworkFloorPlanPathParams = field()
    

@dataclass
class GetNetworkFloorPlanResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_floor_plan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
