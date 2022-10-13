from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDRequest:
    path_params: GetInstancesIDPathParams = field(default=None)
    query_params: GetInstancesIDQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDResponse:
    content_type: str = field(default=None)
    get_instances_id_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
