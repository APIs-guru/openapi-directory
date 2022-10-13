from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDHeaderPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDHeaderQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDHeaderRequest:
    path_params: GetInstancesIDHeaderPathParams = field(default=None)
    query_params: GetInstancesIDHeaderQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDHeaderResponse:
    content_type: str = field(default=None)
    get_instances_id_header_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
