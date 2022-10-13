from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksV3AppIDSettingsGetAllPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksV3AppIDSettingsGetAllSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetWebhooksV3AppIDSettingsGetAllRequest:
    path_params: GetWebhooksV3AppIDSettingsGetAllPathParams = field(default=None)
    security: GetWebhooksV3AppIDSettingsGetAllSecurity = field(default=None)
    

@dataclass
class GetWebhooksV3AppIDSettingsGetAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    settings_response: Optional[shared.SettingsResponse] = field(default=None)
    status_code: int = field(default=None)
    
