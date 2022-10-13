from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateMemberPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMemberRequest:
    path_params: UpdateMemberPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_member_200_application_json_any: Optional[Any] = field(default=None)
    
