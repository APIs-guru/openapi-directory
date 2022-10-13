from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDStudyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDStudyQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDStudyRequest:
    path_params: GetInstancesIDStudyPathParams = field(default=None)
    query_params: GetInstancesIDStudyQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDStudyResponse:
    content_type: str = field(default=None)
    get_instances_id_study_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
