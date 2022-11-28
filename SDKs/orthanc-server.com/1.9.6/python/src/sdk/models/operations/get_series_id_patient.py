from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDPatientPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDPatientQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDPatientRequest:
    path_params: GetSeriesIDPatientPathParams = field()
    query_params: GetSeriesIDPatientQueryParams = field()
    

@dataclass
class GetSeriesIDPatientResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_patient_200_application_json_any: Optional[Any] = field(default=None)
    
