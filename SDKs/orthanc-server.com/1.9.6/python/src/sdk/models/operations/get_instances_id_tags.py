from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetInstancesIDTagsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDTagsQueryParams:
    ignore_length: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ignore-length', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDTagsRequest:
    path_params: GetInstancesIDTagsPathParams = field(default=None)
    query_params: GetInstancesIDTagsQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDTagsResponse:
    content_type: str = field(default=None)
    get_instances_id_tags_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
