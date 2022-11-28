from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetProjectConfigPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetProjectConfigSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SetProjectConfigRequest:
    path_params: SetProjectConfigPathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'application/x-yaml' }})
    security: SetProjectConfigSecurity = field()
    

@dataclass
class SetProjectConfigResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
