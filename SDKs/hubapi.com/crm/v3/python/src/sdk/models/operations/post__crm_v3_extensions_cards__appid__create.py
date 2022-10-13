from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCrmV3ExtensionsCardsAppIDCreatePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCrmV3ExtensionsCardsAppIDCreateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostCrmV3ExtensionsCardsAppIDCreateRequest:
    path_params: PostCrmV3ExtensionsCardsAppIDCreatePathParams = field(default=None)
    request: shared.CardCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCrmV3ExtensionsCardsAppIDCreateSecurity = field(default=None)
    

@dataclass
class PostCrmV3ExtensionsCardsAppIDCreateResponse:
    body: bytes = field(default=None)
    card_response: Optional[shared.CardResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
