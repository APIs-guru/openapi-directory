from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDSharedTagsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDSharedTagsQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDSharedTagsRequest:
    path_params: GetStudiesIDSharedTagsPathParams = field()
    query_params: GetStudiesIDSharedTagsQueryParams = field()
    

@dataclass
class GetStudiesIDSharedTagsResponse:
    content_type: str = field()
    status_code: int = field()
    get_studies_id_shared_tags_200_application_json_any: Optional[Any] = field(default=None)
    
