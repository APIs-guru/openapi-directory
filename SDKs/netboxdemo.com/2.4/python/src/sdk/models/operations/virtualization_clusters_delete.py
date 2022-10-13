from dataclasses import dataclass, field



@dataclass
class VirtualizationClustersDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClustersDeleteRequest:
    path_params: VirtualizationClustersDeletePathParams = field(default=None)
    

@dataclass
class VirtualizationClustersDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
