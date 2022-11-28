from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompletePathParams:
    external_event_id: str = field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteQueryParams:
    external_account_id: str = field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteRequest:
    path_params: PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompletePathParams = field()
    query_params: PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteQueryParams = field()
    request: shared.MarketingEventCompleteRequestParams = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteSecurity = field()
    

@dataclass
class PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    marketing_event_default_response: Optional[shared.MarketingEventDefaultResponse] = field(default=None)
    
