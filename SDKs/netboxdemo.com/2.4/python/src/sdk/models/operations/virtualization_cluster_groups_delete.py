from dataclasses import dataclass, field



@dataclass
class VirtualizationClusterGroupsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterGroupsDeleteRequest:
    path_params: VirtualizationClusterGroupsDeletePathParams = field(default=None)
    

@dataclass
class VirtualizationClusterGroupsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
