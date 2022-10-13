from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams:
    external_event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams:
    external_account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity:
    option1: Optional[PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateRequest:
    path_params: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams = field(default=None)
    query_params: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams = field(default=None)
    request: shared.MarketingEventUpdateRequestParams = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity = field(default=None)
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    marketing_event_public_default_response: Optional[shared.MarketingEventPublicDefaultResponse] = field(default=None)
    status_code: int = field(default=None)
    
