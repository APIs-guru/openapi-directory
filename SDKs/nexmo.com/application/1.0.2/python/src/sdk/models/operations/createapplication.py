from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateApplicationRequestBodyTypeEnum(str, Enum):
    VOICE = "voice"
    MESSAGES = "messages"


@dataclass_json
@dataclass
class CreateApplicationRequestBody:
    answer_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer_method' }})
    answer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer_url' }})
    api_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    api_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_secret' }})
    event_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_method' }})
    event_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_url' }})
    inbound_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_method' }})
    inbound_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_method' }})
    status_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_url' }})
    type: CreateApplicationRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateApplicationRequest:
    request: Optional[CreateApplicationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    application_created: Optional[shared.ApplicationCreated] = field(default=None)
    
