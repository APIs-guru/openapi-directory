from dataclasses import dataclass, field



@dataclass
class ExtrasTopologyMapsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTopologyMapsDeleteRequest:
    path_params: ExtrasTopologyMapsDeletePathParams = field(default=None)
    

@dataclass
class ExtrasTopologyMapsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
