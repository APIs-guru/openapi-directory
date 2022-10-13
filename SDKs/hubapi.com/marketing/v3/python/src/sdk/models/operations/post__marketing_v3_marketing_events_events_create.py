from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsCreateSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsCreateSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsCreateSecurity:
    option1: Optional[PostMarketingV3MarketingEventsEventsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostMarketingV3MarketingEventsEventsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsCreateRequest:
    request: shared.MarketingEventCreateRequestParams = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsCreateSecurity = field(default=None)
    

@dataclass
class PostMarketingV3MarketingEventsEventsCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    marketing_event_default_response: Optional[shared.MarketingEventDefaultResponse] = field(default=None)
    status_code: int = field(default=None)
    
