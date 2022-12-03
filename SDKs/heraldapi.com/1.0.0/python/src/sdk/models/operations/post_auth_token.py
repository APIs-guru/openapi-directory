from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAuthTokenRequestBody:
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    

@dataclass_json
@dataclass
class PostAuthToken200ApplicationJSON:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    expires_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    

@dataclass
class PostAuthTokenRequest:
    request: Optional[PostAuthTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    post_auth_token_200_application_json_object: Optional[PostAuthToken200ApplicationJSON] = field(default=None)
    
