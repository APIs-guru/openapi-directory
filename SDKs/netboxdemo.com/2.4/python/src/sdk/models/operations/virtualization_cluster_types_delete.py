from dataclasses import dataclass, field



@dataclass
class VirtualizationClusterTypesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterTypesDeleteRequest:
    path_params: VirtualizationClusterTypesDeletePathParams = field(default=None)
    

@dataclass
class VirtualizationClusterTypesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
