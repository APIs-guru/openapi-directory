from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDSeriesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDSeriesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDSeriesRequest:
    path_params: GetPatientsIDSeriesPathParams = field()
    query_params: GetPatientsIDSeriesQueryParams = field()
    

@dataclass
class GetPatientsIDSeriesResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_series_200_application_json_any: Optional[Any] = field(default=None)
    
