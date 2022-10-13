from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelPathParams:
    external_event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelQueryParams:
    external_account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurity:
    option1: Optional[PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelRequest:
    path_params: PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelPathParams = field(default=None)
    query_params: PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelQueryParams = field(default=None)
    security: PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelSecurity = field(default=None)
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCancelDoCancelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    marketing_event_default_response: Optional[shared.MarketingEventDefaultResponse] = field(default=None)
    status_code: int = field(default=None)
    
