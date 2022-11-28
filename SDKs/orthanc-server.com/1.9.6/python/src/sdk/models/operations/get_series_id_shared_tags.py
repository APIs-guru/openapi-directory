from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDSharedTagsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDSharedTagsQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDSharedTagsRequest:
    path_params: GetSeriesIDSharedTagsPathParams = field()
    query_params: GetSeriesIDSharedTagsQueryParams = field()
    

@dataclass
class GetSeriesIDSharedTagsResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_shared_tags_200_application_json_any: Optional[Any] = field(default=None)
    
