from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDSeriesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDSeriesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDSeriesRequest:
    path_params: GetPatientsIDSeriesPathParams = field(default=None)
    query_params: GetPatientsIDSeriesQueryParams = field(default=None)
    

@dataclass
class GetPatientsIDSeriesResponse:
    content_type: str = field(default=None)
    get_patients_id_series_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
