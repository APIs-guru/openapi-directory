from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostOauthLiveSessionTokenRequestBody:
    diffie_hellman_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffie_hellman_challenge') }})
    oauth_consumer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_consumer_key') }})
    oauth_nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_nonce') }})
    oauth_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_signature') }})
    oauth_signature_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_signature_method') }})
    oauth_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_timestamp') }})
    oauth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_token') }})
    

@dataclass_json
@dataclass
class PostOauthLiveSessionToken200ApplicationJSON:
    diffie_hellman_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffie_hellman_response') }})
    live_session_token_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('live_session_token_signature') }})
    

@dataclass
class PostOauthLiveSessionTokenRequest:
    request: PostOauthLiveSessionTokenRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOauthLiveSessionTokenResponse:
    content_type: str = field()
    status_code: int = field()
    post_oauth_live_session_token_200_application_json_object: Optional[PostOauthLiveSessionToken200ApplicationJSON] = field(default=None)
    
