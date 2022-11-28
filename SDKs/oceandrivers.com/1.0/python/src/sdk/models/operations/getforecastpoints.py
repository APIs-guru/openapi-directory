from dataclasses import dataclass, field



@dataclass
class GetForecastPointsPathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    yatchclubid: str = field(metadata={'path_param': { 'field_name': 'yatchclubid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastPointsRequest:
    path_params: GetForecastPointsPathParams = field()
    

@dataclass
class GetForecastPointsResponse:
    content_type: str = field()
    status_code: int = field()
    
