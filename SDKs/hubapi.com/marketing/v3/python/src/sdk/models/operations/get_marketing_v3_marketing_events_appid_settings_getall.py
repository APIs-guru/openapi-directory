from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity:
    developer_hapikey: Optional[shared.SchemeDeveloperHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllRequest:
    path_params: GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams = field()
    security: GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity = field()
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    event_detail_settings: Optional[shared.EventDetailSettings] = field(default=None)
    
