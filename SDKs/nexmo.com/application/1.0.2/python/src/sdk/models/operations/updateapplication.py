from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateApplicationPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    
class UpdateApplicationRequestBodyTypeEnum(str, Enum):
    VOICE = "voice"
    MESSAGES = "messages"


@dataclass_json
@dataclass
class UpdateApplicationRequestBody:
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    api_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_secret') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: UpdateApplicationRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    answer_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_method') }})
    answer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_url') }})
    event_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_method') }})
    event_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    

@dataclass
class UpdateApplicationRequest:
    path_params: UpdateApplicationPathParams = field()
    request: Optional[UpdateApplicationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    application: Optional[shared.Application] = field(default=None)
    
