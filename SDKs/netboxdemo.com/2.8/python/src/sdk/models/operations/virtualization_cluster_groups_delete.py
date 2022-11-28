from dataclasses import dataclass, field



@dataclass
class VirtualizationClusterGroupsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterGroupsDeleteRequest:
    path_params: VirtualizationClusterGroupsDeletePathParams = field()
    

@dataclass
class VirtualizationClusterGroupsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
