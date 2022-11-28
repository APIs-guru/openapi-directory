from dataclasses import dataclass, field



@dataclass
class CircuitsProvidersDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsProvidersDeleteRequest:
    path_params: CircuitsProvidersDeletePathParams = field()
    

@dataclass
class CircuitsProvidersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
