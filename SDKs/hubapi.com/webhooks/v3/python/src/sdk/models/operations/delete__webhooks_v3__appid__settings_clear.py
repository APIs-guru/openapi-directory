from dataclasses import dataclass, field



@dataclass
class DeleteWebhooksV3AppIDSettingsClearPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksV3AppIDSettingsClearSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteWebhooksV3AppIDSettingsClearRequest:
    path_params: DeleteWebhooksV3AppIDSettingsClearPathParams = field(default=None)
    security: DeleteWebhooksV3AppIDSettingsClearSecurity = field(default=None)
    

@dataclass
class DeleteWebhooksV3AppIDSettingsClearResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
