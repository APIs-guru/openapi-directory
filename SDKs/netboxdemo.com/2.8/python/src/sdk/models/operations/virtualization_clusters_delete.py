from dataclasses import dataclass, field



@dataclass
class VirtualizationClustersDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClustersDeleteRequest:
    path_params: VirtualizationClustersDeletePathParams = field()
    

@dataclass
class VirtualizationClustersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
