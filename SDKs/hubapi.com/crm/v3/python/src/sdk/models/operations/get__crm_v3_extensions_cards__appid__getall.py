from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllRequest:
    path_params: GetCrmV3ExtensionsCardsAppIDGetAllPathParams = field(default=None)
    security: GetCrmV3ExtensionsCardsAppIDGetAllSecurity = field(default=None)
    

@dataclass
class GetCrmV3ExtensionsCardsAppIDGetAllResponse:
    body: bytes = field(default=None)
    card_list_response: Optional[shared.CardListResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
