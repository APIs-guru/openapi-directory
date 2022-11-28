from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDRequest:
    path_params: GetPatientsIDPathParams = field()
    query_params: GetPatientsIDQueryParams = field()
    

@dataclass
class GetPatientsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_200_application_json_any: Optional[Any] = field(default=None)
    
