from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDPatientPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDPatientQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDPatientRequest:
    path_params: GetInstancesIDPatientPathParams = field(default=None)
    query_params: GetInstancesIDPatientQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDPatientResponse:
    content_type: str = field(default=None)
    get_instances_id_patient_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
