from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDSeriesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDSeriesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDSeriesRequest:
    path_params: GetInstancesIDSeriesPathParams = field(default=None)
    query_params: GetInstancesIDSeriesQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDSeriesResponse:
    content_type: str = field(default=None)
    get_instances_id_series_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
