from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption2:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity:
    option1: Optional[GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllRequest:
    path_params: GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams = field(default=None)
    security: GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity = field(default=None)
    

@dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    event_detail_settings: Optional[shared.EventDetailSettings] = field(default=None)
    status_code: int = field(default=None)
    
