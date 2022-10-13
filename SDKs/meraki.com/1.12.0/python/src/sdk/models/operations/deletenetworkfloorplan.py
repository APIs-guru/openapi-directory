from dataclasses import dataclass, field



@dataclass
class DeleteNetworkFloorPlanPathParams:
    floor_plan_id: str = field(default=None, metadata={'path_param': { 'field_name': 'floorPlanId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkFloorPlanRequest:
    path_params: DeleteNetworkFloorPlanPathParams = field(default=None)
    

@dataclass
class DeleteNetworkFloorPlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
