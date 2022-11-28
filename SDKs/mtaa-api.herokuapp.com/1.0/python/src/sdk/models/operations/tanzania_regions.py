from dataclasses import dataclass, field



@dataclass
class TanzaniaRegionsPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class TanzaniaRegionsRequest:
    path_params: TanzaniaRegionsPathParams = field()
    

@dataclass
class TanzaniaRegionsResponse:
    content_type: str = field()
    status_code: int = field()
    
