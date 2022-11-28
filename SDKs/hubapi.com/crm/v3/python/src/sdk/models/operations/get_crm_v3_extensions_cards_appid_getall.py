from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllRequest:
    path_params: GetCrmV3ExtensionsCardsAppIDGetAllPathParams = field()
    security: GetCrmV3ExtensionsCardsAppIDGetAllSecurity = field()
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    card_list_response: Optional[shared.CardListResponse] = field(default=None)
    
