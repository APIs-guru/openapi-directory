from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDPathParams:
    external_event_id: str = field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    subscriber_state: str = field(metadata={'path_param': { 'field_name': 'subscriberState', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDQueryParams:
    external_account_id: str = field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDRequest:
    path_params: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDPathParams = field()
    query_params: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDQueryParams = field()
    request: shared.BatchInputMarketingEventEmailSubscriber = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDSecurity = field()
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
