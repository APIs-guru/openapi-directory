from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDRequest:
    path_params: GetSeriesIDPathParams = field()
    query_params: GetSeriesIDQueryParams = field()
    

@dataclass
class GetSeriesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_200_application_json_any: Optional[Any] = field(default=None)
    
