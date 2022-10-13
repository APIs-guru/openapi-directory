from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreatePathParams:
    external_event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    subscriber_state: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriberState', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateQueryParams:
    external_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurity:
    option1: Optional[PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateRequest:
    path_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreatePathParams = field(default=None)
    query_params: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateQueryParams = field(default=None)
    request: shared.BatchInputMarketingEventSubscriber = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateSecurity = field(default=None)
    

@dataclass
class PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateResponse:
    batch_response_subscriber_vid_response: Optional[shared.BatchResponseSubscriberVidResponse] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
