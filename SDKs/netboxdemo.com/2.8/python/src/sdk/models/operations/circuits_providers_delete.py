from dataclasses import dataclass, field



@dataclass
class CircuitsProvidersDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsProvidersDeleteRequest:
    path_params: CircuitsProvidersDeletePathParams = field(default=None)
    

@dataclass
class CircuitsProvidersDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
