from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDSharedTagsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDSharedTagsQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDSharedTagsRequest:
    path_params: GetStudiesIDSharedTagsPathParams = field(default=None)
    query_params: GetStudiesIDSharedTagsQueryParams = field(default=None)
    

@dataclass
class GetStudiesIDSharedTagsResponse:
    content_type: str = field(default=None)
    get_studies_id_shared_tags_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
