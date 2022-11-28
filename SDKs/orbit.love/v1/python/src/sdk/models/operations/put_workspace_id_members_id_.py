from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutWorkspaceIDMembersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWorkspaceIDMembersIDSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutWorkspaceIDMembersIDRequest:
    path_params: PutWorkspaceIDMembersIDPathParams = field()
    security: PutWorkspaceIDMembersIDSecurity = field()
    request: Optional[shared.Member] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutWorkspaceIDMembersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
