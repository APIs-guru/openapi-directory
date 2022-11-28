from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWorkspaceIDActivitiesPathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspaceIDActivitiesSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspaceIDActivitiesRequest:
    path_params: PostWorkspaceIDActivitiesPathParams = field()
    security: PostWorkspaceIDActivitiesSecurity = field()
    request: Optional[shared.ActivityAndIdentity] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWorkspaceIDActivitiesResponse:
    content_type: str = field()
    status_code: int = field()
    
