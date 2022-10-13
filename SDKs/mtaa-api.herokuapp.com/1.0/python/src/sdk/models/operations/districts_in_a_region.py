from dataclasses import dataclass, field



@dataclass
class DistrictsInARegionPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    region: str = field(default=None, metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class DistrictsInARegionRequest:
    path_params: DistrictsInARegionPathParams = field(default=None)
    

@dataclass
class DistrictsInARegionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
