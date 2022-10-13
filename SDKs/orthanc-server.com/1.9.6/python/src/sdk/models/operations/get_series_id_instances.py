from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDInstancesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDInstancesQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDInstancesRequest:
    path_params: GetSeriesIDInstancesPathParams = field(default=None)
    query_params: GetSeriesIDInstancesQueryParams = field(default=None)
    

@dataclass
class GetSeriesIDInstancesResponse:
    content_type: str = field(default=None)
    get_series_id_instances_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
