from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateRequest:
    path_params: PatchCrmV3ExtensionsCardsAppIDCardIDUpdatePathParams = field()
    request: shared.CardPatchRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity = field()
    

@dataclass
class PatchCrmV3ExtensionsCardsAppIDCardIDUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    card_response: Optional[shared.CardResponse] = field(default=None)
    
