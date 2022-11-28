from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDStudiesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDStudiesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDStudiesRequest:
    path_params: GetPatientsIDStudiesPathParams = field()
    query_params: GetPatientsIDStudiesQueryParams = field()
    

@dataclass
class GetPatientsIDStudiesResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_studies_200_application_json_any: Optional[Any] = field(default=None)
    
