from dataclasses import dataclass, field



@dataclass
class DistrictsInARegionPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    region: str = field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class DistrictsInARegionRequest:
    path_params: DistrictsInARegionPathParams = field()
    

@dataclass
class DistrictsInARegionResponse:
    content_type: str = field()
    status_code: int = field()
    
