from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDRequest:
    path_params: GetInstancesIDPathParams = field()
    query_params: GetInstancesIDQueryParams = field()
    

@dataclass
class GetInstancesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_200_application_json_any: Optional[Any] = field(default=None)
    
