from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDInstancesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDInstancesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDInstancesRequest:
    path_params: GetPatientsIDInstancesPathParams = field(default=None)
    query_params: GetPatientsIDInstancesQueryParams = field(default=None)
    

@dataclass
class GetPatientsIDInstancesResponse:
    content_type: str = field(default=None)
    get_patients_id_instances_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
