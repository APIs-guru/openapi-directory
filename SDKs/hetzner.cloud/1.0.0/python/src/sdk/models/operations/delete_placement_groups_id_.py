from dataclasses import dataclass, field



@dataclass
class DeletePlacementGroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePlacementGroupsIDRequest:
    path_params: DeletePlacementGroupsIDPathParams = field(default=None)
    

@dataclass
class DeletePlacementGroupsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
