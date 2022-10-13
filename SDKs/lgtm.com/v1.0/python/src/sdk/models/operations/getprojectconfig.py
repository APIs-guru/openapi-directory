from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetProjectConfigPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    
class GetProjectConfigSourceEnum(str, Enum):
    REPOSITORY = "repository"
    ADMINISTRATOR = "administrator"


@dataclass
class GetProjectConfigQueryParams:
    source: Optional[GetProjectConfigSourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectConfigSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProjectConfigRequest:
    path_params: GetProjectConfigPathParams = field(default=None)
    query_params: GetProjectConfigQueryParams = field(default=None)
    security: GetProjectConfigSecurity = field(default=None)
    

@dataclass
class GetProjectConfigResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_project_config_400_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
