from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteMemberPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMemberRequest:
    path_params: DeleteMemberPathParams = field(default=None)
    

@dataclass
class DeleteMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_member_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
