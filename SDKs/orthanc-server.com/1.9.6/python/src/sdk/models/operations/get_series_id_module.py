from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetSeriesIDModulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDModuleQueryParams:
    ignore_length: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ignore-length', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDModuleRequest:
    path_params: GetSeriesIDModulePathParams = field()
    query_params: GetSeriesIDModuleQueryParams = field()
    

@dataclass
class GetSeriesIDModuleResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_module_200_application_json_any: Optional[Any] = field(default=None)
    
