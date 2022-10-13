from dataclasses import dataclass, field



@dataclass
class GetForecastPointsPathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    yatchclubid: str = field(default=None, metadata={'path_param': { 'field_name': 'yatchclubid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastPointsRequest:
    path_params: GetForecastPointsPathParams = field(default=None)
    

@dataclass
class GetForecastPointsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
