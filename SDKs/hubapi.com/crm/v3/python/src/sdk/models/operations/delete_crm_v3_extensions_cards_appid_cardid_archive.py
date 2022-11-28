from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest:
    path_params: DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams = field()
    security: DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity = field()
    

@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
