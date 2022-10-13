from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateApplicationPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    
class UpdateApplicationRequestBodyTypeEnum(str, Enum):
    VOICE = "voice"
    MESSAGES = "messages"


@dataclass_json
@dataclass
class UpdateApplicationRequestBody:
    answer_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer_method' }})
    answer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer_url' }})
    api_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    api_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_secret' }})
    event_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_method' }})
    event_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: UpdateApplicationRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class UpdateApplicationRequest:
    path_params: UpdateApplicationPathParams = field(default=None)
    request: Optional[UpdateApplicationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    application: Optional[shared.Application] = field(default=None)
    
