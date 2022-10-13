from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetMemberPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMemberRequest:
    path_params: GetMemberPathParams = field(default=None)
    

@dataclass
class GetMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_member_200_application_json_any: Optional[Any] = field(default=None)
    
