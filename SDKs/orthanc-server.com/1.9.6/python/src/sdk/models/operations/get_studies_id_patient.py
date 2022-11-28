from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDPatientPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDPatientQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDPatientRequest:
    path_params: GetStudiesIDPatientPathParams = field()
    query_params: GetStudiesIDPatientQueryParams = field()
    

@dataclass
class GetStudiesIDPatientResponse:
    content_type: str = field()
    status_code: int = field()
    get_studies_id_patient_200_application_json_any: Optional[Any] = field(default=None)
    
