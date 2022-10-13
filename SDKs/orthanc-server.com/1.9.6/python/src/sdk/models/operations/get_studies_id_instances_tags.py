from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetStudiesIDInstancesTagsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDInstancesTagsQueryParams:
    ignore_length: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ignore-length', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDInstancesTagsRequest:
    path_params: GetStudiesIDInstancesTagsPathParams = field(default=None)
    query_params: GetStudiesIDInstancesTagsQueryParams = field(default=None)
    

@dataclass
class GetStudiesIDInstancesTagsResponse:
    content_type: str = field(default=None)
    get_studies_id_instances_tags_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
