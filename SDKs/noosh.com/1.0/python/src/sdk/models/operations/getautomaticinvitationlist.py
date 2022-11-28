from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAutomaticInvitationListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomaticInvitationListRequest:
    path_params: GetAutomaticInvitationListPathParams = field()
    

@dataclass
class GetAutomaticInvitationListResponse:
    content_type: str = field()
    status_code: int = field()
    automatic_invitations_list_vo: Optional[Any] = field(default=None)
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    
