from dataclasses import dataclass, field



@dataclass
class ExtrasTopologyMapsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTopologyMapsDeleteRequest:
    path_params: ExtrasTopologyMapsDeletePathParams = field()
    

@dataclass
class ExtrasTopologyMapsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
