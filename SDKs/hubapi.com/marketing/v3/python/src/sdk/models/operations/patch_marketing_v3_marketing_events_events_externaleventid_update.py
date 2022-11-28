from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams:
    external_event_id: str = field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams:
    external_account_id: str = field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateRequest:
    path_params: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams = field()
    query_params: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams = field()
    request: shared.MarketingEventUpdateRequestParams = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity = field()
    

@dataclass
class PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    marketing_event_public_default_response: Optional[shared.MarketingEventPublicDefaultResponse] = field(default=None)
    
