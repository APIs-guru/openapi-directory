from dataclasses import dataclass, field



@dataclass
class TanzaniaRegionsPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class TanzaniaRegionsRequest:
    path_params: TanzaniaRegionsPathParams = field(default=None)
    

@dataclass
class TanzaniaRegionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
