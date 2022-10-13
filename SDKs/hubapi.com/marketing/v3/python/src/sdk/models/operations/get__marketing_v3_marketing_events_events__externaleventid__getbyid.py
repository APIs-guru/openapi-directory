from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams:
    external_event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams:
    external_account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity:
    option1: Optional[GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDRequest:
    path_params: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams = field(default=None)
    query_params: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams = field(default=None)
    security: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    marketing_event_public_read_response: Optional[shared.MarketingEventPublicReadResponse] = field(default=None)
    status_code: int = field(default=None)
    
