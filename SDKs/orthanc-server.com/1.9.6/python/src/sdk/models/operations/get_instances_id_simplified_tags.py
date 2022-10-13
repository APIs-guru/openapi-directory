from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetInstancesIDSimplifiedTagsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDSimplifiedTagsQueryParams:
    ignore_length: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ignore-length', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDSimplifiedTagsRequest:
    path_params: GetInstancesIDSimplifiedTagsPathParams = field(default=None)
    query_params: GetInstancesIDSimplifiedTagsQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDSimplifiedTagsResponse:
    content_type: str = field(default=None)
    get_instances_id_simplified_tags_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
