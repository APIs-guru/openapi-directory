from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostEventsV3SendSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostEventsV3SendRequest:
    request: shared.BehavioralEventHTTPCompletionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostEventsV3SendSecurity = field()
    

@dataclass
class PostEventsV3SendResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
