from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetInstancesIDModulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDModuleQueryParams:
    ignore_length: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ignore-length', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDModuleRequest:
    path_params: GetInstancesIDModulePathParams = field()
    query_params: GetInstancesIDModuleQueryParams = field()
    

@dataclass
class GetInstancesIDModuleResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_module_200_application_json_any: Optional[Any] = field(default=None)
    
