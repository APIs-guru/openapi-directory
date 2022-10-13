from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDStudiesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDStudiesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDStudiesRequest:
    path_params: GetPatientsIDStudiesPathParams = field(default=None)
    query_params: GetPatientsIDStudiesQueryParams = field(default=None)
    

@dataclass
class GetPatientsIDStudiesResponse:
    content_type: str = field(default=None)
    get_patients_id_studies_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
