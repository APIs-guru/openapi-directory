from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams:
    external_event_id: str = field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams:
    external_account_id: str = field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDRequest:
    path_params: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams = field()
    query_params: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams = field()
    security: GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity = field()
    

@dataclass
class GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    marketing_event_public_read_response: Optional[shared.MarketingEventPublicReadResponse] = field(default=None)
    
