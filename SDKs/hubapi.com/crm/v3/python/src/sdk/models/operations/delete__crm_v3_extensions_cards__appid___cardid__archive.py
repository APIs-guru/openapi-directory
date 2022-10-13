from dataclasses import dataclass, field



@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest:
    path_params: DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams = field(default=None)
    security: DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity = field(default=None)
    

@dataclass
class DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
