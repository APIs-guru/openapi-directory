from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostOauthRequestTokenRequestBody:
    oauth_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_callback' }})
    oauth_consumer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_consumer_key' }})
    oauth_nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_nonce' }})
    oauth_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_signature' }})
    oauth_signature_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_signature_method' }})
    oauth_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_timestamp' }})
    

@dataclass
class PostOauthRequestTokenRequest:
    request: PostOauthRequestTokenRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostOauthRequestToken200ApplicationJSON:
    oauth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_token' }})
    

@dataclass
class PostOauthRequestTokenResponse:
    content_type: str = field(default=None)
    post_oauth_request_token_200_application_json_object: Optional[PostOauthRequestToken200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
