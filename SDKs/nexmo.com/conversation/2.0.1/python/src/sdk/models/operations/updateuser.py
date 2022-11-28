from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdateUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateUserResponse:
    content_type: str = field()
    status_code: int = field()
    update_user_200_application_json_any: Optional[Any] = field(default=None)
    
