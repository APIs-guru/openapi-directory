from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SessionRequestGrantTypeEnum(str, Enum):
    CLIENT_CREDENTIALS = "client_credentials"
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclass
class SessionRequest:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    grant_type: SessionRequestGrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantType') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    
