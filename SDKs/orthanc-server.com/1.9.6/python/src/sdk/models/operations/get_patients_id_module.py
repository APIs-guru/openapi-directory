from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetPatientsIDModulePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDModuleQueryParams:
    ignore_length: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ignore-length', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDModuleRequest:
    path_params: GetPatientsIDModulePathParams = field(default=None)
    query_params: GetPatientsIDModuleQueryParams = field(default=None)
    

@dataclass
class GetPatientsIDModuleResponse:
    content_type: str = field(default=None)
    get_patients_id_module_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
