from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateRequest:
    path_params: PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams = field(default=None)
    request: shared.CardPatchRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity = field(default=None)
    

@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateResponse:
    body: bytes = field(default=None)
    card_response: Optional[shared.CardResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
