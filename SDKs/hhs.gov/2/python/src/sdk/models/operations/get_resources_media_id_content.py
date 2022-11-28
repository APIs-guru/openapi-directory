from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetResourcesMediaIDContentPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDContentQueryParams:
    called_by_build: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'calledByBuild', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDContentRequest:
    path_params: GetResourcesMediaIDContentPathParams = field()
    query_params: GetResourcesMediaIDContentQueryParams = field()
    

@dataclass
class GetResourcesMediaIDContentResponse:
    content_type: str = field()
    status_code: int = field()
    get_resources_media_id_content_200_application_json_string: Optional[str] = field(default=None)
    
