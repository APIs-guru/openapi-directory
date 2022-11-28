from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDHeaderPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDHeaderQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDHeaderRequest:
    path_params: GetInstancesIDHeaderPathParams = field()
    query_params: GetInstancesIDHeaderQueryParams = field()
    

@dataclass
class GetInstancesIDHeaderResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_header_200_application_json_any: Optional[Any] = field(default=None)
    
