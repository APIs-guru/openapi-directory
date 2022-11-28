from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest:
    request: shared.BatchInputMarketingEventCreateRequestParams = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity = field()
    

@dataclass
class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse:
    content_type: str = field()
    status_code: int = field()
    batch_response_marketing_event_public_default_response: Optional[shared.BatchResponseMarketingEventPublicDefaultResponse] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
