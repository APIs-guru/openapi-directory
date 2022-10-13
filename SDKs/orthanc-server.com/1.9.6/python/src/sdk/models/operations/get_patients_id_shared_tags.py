from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDSharedTagsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDSharedTagsQueryParams:
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDSharedTagsRequest:
    path_params: GetPatientsIDSharedTagsPathParams = field(default=None)
    query_params: GetPatientsIDSharedTagsQueryParams = field(default=None)
    

@dataclass
class GetPatientsIDSharedTagsResponse:
    content_type: str = field(default=None)
    get_patients_id_shared_tags_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
