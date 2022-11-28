from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetPatientsIDInstancesTagsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDInstancesTagsQueryParams:
    ignore_length: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ignore-length', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    simplify: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'simplify', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDInstancesTagsRequest:
    path_params: GetPatientsIDInstancesTagsPathParams = field()
    query_params: GetPatientsIDInstancesTagsQueryParams = field()
    

@dataclass
class GetPatientsIDInstancesTagsResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_instances_tags_200_application_json_any: Optional[Any] = field(default=None)
    
