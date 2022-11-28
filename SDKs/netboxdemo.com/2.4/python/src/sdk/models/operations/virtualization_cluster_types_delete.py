from dataclasses import dataclass, field



@dataclass
class VirtualizationClusterTypesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterTypesDeleteRequest:
    path_params: VirtualizationClusterTypesDeletePathParams = field()
    

@dataclass
class VirtualizationClusterTypesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
