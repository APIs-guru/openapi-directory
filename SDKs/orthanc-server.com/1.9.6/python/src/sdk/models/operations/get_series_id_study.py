from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDStudyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDStudyQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDStudyRequest:
    path_params: GetSeriesIDStudyPathParams = field()
    query_params: GetSeriesIDStudyQueryParams = field()
    

@dataclass
class GetSeriesIDStudyResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_study_200_application_json_any: Optional[Any] = field(default=None)
    
