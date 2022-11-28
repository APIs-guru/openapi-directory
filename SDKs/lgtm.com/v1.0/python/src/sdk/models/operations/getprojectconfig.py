from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProjectConfigPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    
class GetProjectConfigSourceEnum(str, Enum):
    REPOSITORY = "repository"
    ADMINISTRATOR = "administrator"


@dataclass
class GetProjectConfigQueryParams:
    source: Optional[GetProjectConfigSourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectConfigSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProjectConfigRequest:
    path_params: GetProjectConfigPathParams = field()
    query_params: GetProjectConfigQueryParams = field()
    security: GetProjectConfigSecurity = field()
    

@dataclass
class GetProjectConfigResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_project_config_400_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
