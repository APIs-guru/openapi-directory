from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity:
    developer_hapikey: Optional[shared.SchemeDeveloperHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateRequest:
    path_params: PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams = field()
    request: shared.EventDetailSettingsURL = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity = field()
    

@dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    event_detail_settings: Optional[shared.EventDetailSettings] = field(default=None)
    
