from dataclasses import dataclass, field



@dataclass
class DeleteNetworkFloorPlanPathParams:
    floor_plan_id: str = field(metadata={'path_param': { 'field_name': 'floorPlanId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkFloorPlanRequest:
    path_params: DeleteNetworkFloorPlanPathParams = field()
    

@dataclass
class DeleteNetworkFloorPlanResponse:
    content_type: str = field()
    status_code: int = field()
    
