from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption2:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity:
    option1: Optional[PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostMarketingV3MarketingEventsAppIDSettingsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateRequest:
    path_params: PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams = field(default=None)
    request: shared.EventDetailSettingsURL = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity = field(default=None)
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    event_detail_settings: Optional[shared.EventDetailSettings] = field(default=None)
    status_code: int = field(default=None)
    
