from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostOauthAccessTokenRequestBody:
    oauth_consumer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_consumer_key') }})
    oauth_nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_nonce') }})
    oauth_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_signature') }})
    oauth_signature_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_signature_method') }})
    oauth_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_timestamp') }})
    oauth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_token') }})
    oauth_verifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_verifier') }})
    

@dataclass_json
@dataclass
class PostOauthAccessToken200ApplicationJSON:
    oauth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_token') }})
    oauth_token_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_token_secret') }})
    

@dataclass
class PostOauthAccessTokenRequest:
    request: PostOauthAccessTokenRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOauthAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    post_oauth_access_token_200_application_json_object: Optional[PostOauthAccessToken200ApplicationJSON] = field(default=None)
    
