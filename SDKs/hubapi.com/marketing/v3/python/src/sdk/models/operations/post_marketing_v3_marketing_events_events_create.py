from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsCreateSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsCreateRequest:
    request: shared.MarketingEventCreateRequestParams = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsCreateSecurity = field()
    

@dataclass
class PostMarketingV3MarketingEventsEventsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    marketing_event_default_response: Optional[shared.MarketingEventDefaultResponse] = field(default=None)
    
