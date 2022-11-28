from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams:
    external_event_id: str = field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceRequest:
    path_params: PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams = field()
    request: shared.MarketingEventCreateRequestParams = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity = field()
    

@dataclass
class PutMarketingV3MarketingEventsEventsExternalEventIDReplaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    marketing_event_public_default_response: Optional[shared.MarketingEventPublicDefaultResponse] = field(default=None)
    
