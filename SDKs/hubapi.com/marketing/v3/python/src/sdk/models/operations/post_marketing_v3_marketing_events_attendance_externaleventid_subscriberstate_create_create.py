from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams:
    external_event_id: str = field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    subscriber_state: str = field(metadata={'path_param': { 'field_name': 'subscriberState', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams:
    external_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest:
    path_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams = field()
    query_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams = field()
    request: shared.BatchInputMarketingEventSubscriber = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity = field()
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateResponse:
    content_type: str = field()
    status_code: int = field()
    batch_response_subscriber_vid_response: Optional[shared.BatchResponseSubscriberVidResponse] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
