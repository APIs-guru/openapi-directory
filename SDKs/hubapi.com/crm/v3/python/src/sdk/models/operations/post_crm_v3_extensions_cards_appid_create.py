from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCrmV3ExtensionsCardsAppIDCreatePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCrmV3ExtensionsCardsAppIDCreateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostCrmV3ExtensionsCardsAppIDCreateRequest:
    path_params: PostCrmV3ExtensionsCardsAppIDCreatePathParams = field()
    request: shared.CardCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostCrmV3ExtensionsCardsAppIDCreateSecurity = field()
    

@dataclass
class PostCrmV3ExtensionsCardsAppIDCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    card_response: Optional[shared.CardResponse] = field(default=None)
    
