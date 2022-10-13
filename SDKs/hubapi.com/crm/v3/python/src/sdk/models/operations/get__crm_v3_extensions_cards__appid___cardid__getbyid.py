from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDRequest:
    path_params: GetCrmV3ExtensionsCardsAppIDCardIDGetByIDPathParams = field(default=None)
    security: GetCrmV3ExtensionsCardsAppIDCardIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDCardIDGetByIDResponse:
    body: bytes = field(default=None)
    card_response: Optional[shared.CardResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
