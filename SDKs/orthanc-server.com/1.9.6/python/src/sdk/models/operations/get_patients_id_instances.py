from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDInstancesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDInstancesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDInstancesRequest:
    path_params: GetPatientsIDInstancesPathParams = field()
    query_params: GetPatientsIDInstancesQueryParams = field()
    

@dataclass
class GetPatientsIDInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_instances_200_application_json_any: Optional[Any] = field(default=None)
    
