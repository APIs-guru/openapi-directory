from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostEventsV3SendSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostEventsV3SendSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostEventsV3SendSecurity:
    option1: Optional[PostEventsV3SendSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostEventsV3SendSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostEventsV3SendRequest:
    request: shared.BehavioralEventHTTPCompletionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostEventsV3SendSecurity = field(default=None)
    

@dataclass
class PostEventsV3SendResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
