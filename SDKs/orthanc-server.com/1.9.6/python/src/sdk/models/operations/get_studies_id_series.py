from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDSeriesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDSeriesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDSeriesRequest:
    path_params: GetStudiesIDSeriesPathParams = field(default=None)
    query_params: GetStudiesIDSeriesQueryParams = field(default=None)
    

@dataclass
class GetStudiesIDSeriesResponse:
    content_type: str = field(default=None)
    get_studies_id_series_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
