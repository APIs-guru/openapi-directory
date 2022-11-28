from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdateMemberPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    member_id: str = field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMemberRequest:
    path_params: UpdateMemberPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMemberResponse:
    content_type: str = field()
    status_code: int = field()
    update_member_200_application_json_any: Optional[Any] = field(default=None)
    
