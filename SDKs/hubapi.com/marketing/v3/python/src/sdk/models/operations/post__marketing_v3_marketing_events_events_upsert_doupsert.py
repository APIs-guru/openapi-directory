from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity:
    option1: Optional[PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest:
    request: shared.BatchInputMarketingEventCreateRequestParams = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity = field(default=None)
    

@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse:
    batch_response_marketing_event_public_default_response: Optional[shared.BatchResponseMarketingEventPublicDefaultResponse] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
