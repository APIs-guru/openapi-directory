from dataclasses import dataclass, field



@dataclass
class DeletePlacementGroupsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePlacementGroupsIDRequest:
    path_params: DeletePlacementGroupsIDPathParams = field()
    

@dataclass
class DeletePlacementGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
