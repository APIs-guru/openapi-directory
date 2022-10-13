from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDPathParams:
    external_event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    subscriber_state: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriberState', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDQueryParams:
    external_account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurity:
    option1: Optional[PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDRequest:
    path_params: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDPathParams = field(default=None)
    query_params: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDQueryParams = field(default=None)
    request: shared.BatchInputMarketingEventSubscriber = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurity = field(default=None)
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
