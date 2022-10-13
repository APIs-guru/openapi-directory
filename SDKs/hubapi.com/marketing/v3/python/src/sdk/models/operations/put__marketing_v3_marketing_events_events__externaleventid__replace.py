from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams:
    external_event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity:
    option1: Optional[PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceRequest:
    path_params: PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams = field(default=None)
    request: shared.MarketingEventCreateRequestParams = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity = field(default=None)
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    marketing_event_public_default_response: Optional[shared.MarketingEventPublicDefaultResponse] = field(default=None)
    status_code: int = field(default=None)
    
