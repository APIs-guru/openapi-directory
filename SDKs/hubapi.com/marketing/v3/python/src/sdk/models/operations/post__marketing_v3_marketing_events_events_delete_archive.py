from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity:
    option1: Optional[PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveRequest:
    request: shared.BatchInputMarketingEventExternalUniqueIdentifier = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity = field(default=None)
    

@dataclass
class PostMarketingV3MarketingEventsEventsDeleteArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
