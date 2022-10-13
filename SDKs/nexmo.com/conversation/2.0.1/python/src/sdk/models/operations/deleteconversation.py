from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationRequest:
    path_params: DeleteConversationPathParams = field(default=None)
    

@dataclass
class DeleteConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_conversation_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
